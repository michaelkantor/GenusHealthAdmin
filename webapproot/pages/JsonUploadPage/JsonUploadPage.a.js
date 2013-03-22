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
this.sanitizeJson(r);
}, this);
}
break;
case "actioncode":
if (name != "actionCode") {
inData.actionCode = inData[name];
delete inData.name;
}
break;
}
}
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

JsonUploadPage.widgets = {
insertJsonLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","operation":"insert","startUpdate":false,"type":"com.genushealthdb.data.Jsonfiles"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Jsonfiles","view":[{"caption":"FileId","sortable":true,"dataIndex":"fileId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Text","sortable":true,"dataIndex":"text","type":"byte","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"ModifiedAt","sortable":true,"dataIndex":"modifiedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}]}, {}]
}],
insertNodeGroupLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","operation":"insert","startUpdate":false,"type":"com.genushealthdb.data.NodeGroup"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"conditionName.dataValue","targetProperty":"sourceData.name"}, {}],
wire1: ["wm.Wire", {"expression":"0","targetProperty":"sourceData.nodegroupId"}, {}],
wire2: ["wm.Wire", {"expression":"0","targetProperty":"sourceData.status"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.NodeGroup","view":[{"caption":"NodegroupId","sortable":true,"dataIndex":"nodegroupId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Status","sortable":true,"dataIndex":"status","type":"java.lang.Byte","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}]}, {}]
}],
insertNodeLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeAll","loadingDialog":"","operation":"insert","startUpdate":false,"type":"com.genushealthdb.data.Node"}, {"onResult":"insertNodeLVarResult"}, {
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Node","view":[{"caption":"NodeId","sortable":true,"dataIndex":"nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Question","sortable":true,"dataIndex":"question","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Answer","sortable":true,"dataIndex":"answer","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"Parent_id","sortable":true,"dataIndex":"parent_id","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
conditionListSVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getConditionList","service":"GenusHealthDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getConditionListInputs"}, {}]
}],
getNextNodeId: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getMaxNodeId","service":"GenusHealthDB"}, {"onSuccess":"getNextNodeIdSuccess"}, {
input: ["wm.ServiceInput", {"type":"getMaxNodeIdInputs"}, {}]
}],
addDispositionsLiveVariable: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeAll","operation":"insert","startUpdate":false,"type":"com.genushealthdb.data.Dispositions"}, {"onSuccess":"addDispositionsLiveVariableSuccess"}, {
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Dispositions","view":[{"caption":"DispositionId","sortable":true,"dataIndex":"dispositionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Text","sortable":true,"dataIndex":"text","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"ModifiedAt","sortable":true,"dataIndex":"modifiedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"DisplayName","sortable":true,"dataIndex":"displayName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}]}, {}]
}],
loadingDialog: ["wm.LoadingDialog", {"caption":"Saving..."}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
jsonLayer: ["wm.Panel", {"border":"1","borderColor":"#999999","height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top","width":"100%"}, {}, {
jsonInput: ["wm.LargeTextArea", {"caption":"Paste Json in here","changeOnKey":true,"dataValue":undefined,"displayValue":"","height":"100%"}, {"onchange":"jsonInputChange","onchange1":"updateButtonDisabled"}],
splitter1: ["wm.Splitter", {"height":"100%","width":"4px"}, {}],
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
jsonHtml: ["wm.Html", {"height":"100%","minDesktopHeight":15}, {}],
panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
conditionName: ["wm.SelectMenu", {"caption":"Condition Name","captionSize":"140px","dataField":"name","dataType":"com.genushealthdb.data.NodeGroup","dataValue":undefined,"displayField":"name","displayValue":"","restrictValues":false}, {"onchange":"updateButtonDisabled"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"conditionListSVar","targetProperty":"dataSet"}, {}]
}]
}],
importJsonButton: ["wm.Button", {"caption":"Import","disabled":true,"margin":"4"}, {"onclick":"importJsonButtonClick"}]
}]
}]
}]
}]
};

JsonUploadPage.prototype._cssText = '';
JsonUploadPage.prototype._htmlText = '';