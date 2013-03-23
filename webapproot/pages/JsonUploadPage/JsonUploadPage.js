dojo.declare("JsonUploadPage", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",
    updateButtonDisabled: function() {
        this.importJsonButton.setDisabled(!this.conditionName.getDataValue() || !this.jsonHtml.html);
    },
    jsonInputChange: function(inSender, inDisplayValue, inDataValue, inSetByCode) {
        try {
            var data = dojo.fromJson(inDisplayValue);
            this.sanitizeJson(data);
            this.dispositionsArray = [];
            var html = "<ul>" + this.getHtmlFromData(data) + "</ul>";
            this.jsonHtml.setHtml(html);
            dojo.query(".HasChildren", this.jsonHtml.domNode).onclick(dojo.hitch(this, "onJsonNodeClick"));            
        } catch(e) {}
        
    },
    importJsonButtonClick: function(inSender) {
        try {
            var data = dojo.fromJson(this.jsonInput.getDataValue());
            var errors = this.sanitizeJson(data);
            if (errors) {
                app.alert("Error in Json: '" + errors + "' is not valid");
                return;
            }
            this.getNextNodeId.update();
            this.loadingDialog.show();
        } catch(e) {app.alert("Invalid JSON");}        
    },
    onJsonNodeClick: function(inEvent) {      
        dojo.stopEvent(inEvent);
        var target = inEvent.target;
        while (target && target.tagName != "LI") target = target.parentNode;
        dojo.toggleClass(target, "HideChildren");
    },    
 
    getHtmlFromData: function(inData) {
        var html = "";
        if (inData.actionCode && dojo.indexOf(this.dispositionsArray,inData.actionCode) == -1 &&
            wm.getPage("Main2").dispositionsLiveVariable1.query({name: inData.actionCode}).getCount() == 0) {
            this.dispositionsArray.push(inData.actionCode);
        }
        if (inData.answer && inData.question) {
            html += "<li class='HasChildren'><span class='Anchor'>ANSWER: " + inData.answer + "; QUESTION: " + inData.question + "</span><ol>";
        } else if (inData.question) {
            html += "<li class='HasChildren'><span class='Anchor'>QUESTION: " + inData.question + "</span><ol>";
        } else if (inData.answer) {
            html += "<li>ANSWER: " + inData.answer + "</li>";
        }
        if (inData.question) {         
            dojo.forEach(inData.responses, function(response) {
                html += this.getHtmlFromData(response);
            }, this);
            html += "</ol></li>";
        }
        return html;
    },
 getNextNodeIdSuccess: function(inSender, inDeprecated) {
            var data = dojo.fromJson(this.jsonInput.getDataValue());
            this.addIds(data, this.getNextNodeId.getValue("newId") || 1);
            this.sanitizeJson(data);
            this._data = data;
            this.insertNode(data, null);
            
            this.insertNodeGroupLVar.sourceData.setValue("node.nodeId", data.nodeId);
            this.insertNodeGroupLVar.update();
            
            for (var i = 0; i < this.dispositionsArray.length; i++) {
                this.addDispositionsLiveVariable.sourceData.setData({
                    dispositionId: 0,
                    name: this.dispositionsArray[i],
                    text: "",
                    createdAt: new Date().getTime(),
                    modifiedAt: new Date().getTime()
                });
                this.addDispositionsLiveVariable.update();
            }
    },
    
    /* Handle common errors when editing the json file */
    sanitizeJson: function(inData) {
        var hasErrors = false;
        for (var name in inData) {
            switch(name.toLowerCase()) {
                case "question":
                    if (name != "question") {
                        inData.question = inData[name];
                        delete inData.name;
                    }
                    break;
                case "answer":
                    if (name != "answer") {
                        inData.answer = inData[name];
                        delete inData.name;
                    }
                    break;
                case "responses":
                    if (name != "responses") {
                        inData.responses = inData[name];
                        delete inData.name;
                    }
                    if (inData.responses) {
                        dojo.forEach(inData.responses, function(r) {
                            var result = this.sanitizeJson(r);
                            if (result) hasErrors = result;
                        }, this);
                    }
                    break;
                case "actioncode":
                    if (name != "actionCode") {
                        inData.actionCode = inData[name];
                        delete inData.name;
                    }
                    break;
                default:
                    hasErrors = name;
            }
        }
        return hasErrors;
    },
    addIds: function(inData, inId) {
        inData.nodeId = inId;
        inId++;
        if (inData.responses) {
            dojo.forEach(inData.responses, function(response) {
                inId = this.addIds(response, inId+1);
                inId++;
            }, this);
        }
        return inId;
    },
    insertNode: function(inData, parentId) {
        this.insertNodeLVar.sourceData.setData({
            nodeId: inData.nodeId, // addIds removes any ids user puts into the JSON.
            parent_id: parentId,
            question: inData.question,
            answer: inData.answer,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()});
         this.insertNodeLVar.update();
         if (inData.responses && inData.responses.length) {
             dojo.forEach(inData.responses, function(response) {
                 this.insertNode(response, inData.nodeId);
             }, this);
         }
    },
    insertNodeLVarResult: function(inSender, inDeprecated) {
        if (inSender._inFlightBacklog.length == 0) {
            this.insertJsonLVar.sourceData.setData({
                fileId: 0,
                text: dojo.toJson(this._data),
                name: this.conditionName.getDataValue(),
                createdAt: new Date().getTime(),
                modifiedAt: new Date().getTime()
            });
            this.insertJsonLVar.update();
            this.loadingDialog.hide();
            app.toastSuccess("Nodes saved");            
        }
    },
	addDispositionsLiveVariableSuccess: function(inSender, inDeprecated) {
        if (inSender._inFlightBacklog.length == 0) {
            wm.getPage("Main2").dispositionsLiveVariable1.update();
        }
    },
    _end: 0
});