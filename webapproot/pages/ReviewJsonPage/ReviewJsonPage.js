dojo.declare("ReviewJsonPage", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",

	getJsonFileSuccess: function(inSender, inDeprecated) {
        var text = inSender.getValue("text");
        text = dojo.toJson(dojo.fromJson(text),1);
		this.html1.setHtml("<pre>" + text + "</pre>");
	},
	

    getConditionTypesSVarPrepareSetData: function(inSender, inData) {
        if (inData) {
            for (var i = 0; i < inData.length; i++) {
                switch(inData[i].status) {
                    case 0:
                        inData[i].status = "Disabled";
                        break;
                    case 1:
                        inData[i].status = "Test";
                        break;
                    case 2:
                        inData[i].status = "Published";
                        break;
                }                
            }
        }
    },
    conditionTypeGridCellEdited: function(inSender, inValue, rowId, fieldId, isInvalid) {
        switch(inValue) {
            case "Disabled":
                inValue = 0;
                break;
            case "Test":
                inValue = 1;
                break;
            case "Published":
                inValue = 2;
                break;
        }
        
        this.updateNodeGroupLVar.sourceData.setValue("status", inValue);
        this.updateNodeGroupLVar.update();
    },
    _end: 0
});