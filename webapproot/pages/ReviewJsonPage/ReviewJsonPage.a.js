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

ReviewJsonPage.widgets = {
getConditionTypesSVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getConditionList","service":"GenusHealthDB","startUpdate":true}, {"onPrepareSetData":"getConditionTypesSVarPrepareSetData"}, {
input: ["wm.ServiceInput", {"type":"getConditionListInputs"}, {}]
}],
getJsonFile: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getJsonFilesByConditionType","service":"GenusHealthDB"}, {"onSuccess":"getJsonFileSuccess"}, {
input: ["wm.ServiceInput", {"type":"getJsonFilesByConditionTypeInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"conditionTypeGrid.selectedItem.name","targetProperty":"conditionType"}, {}]
}]
}]
}],
updateNodeGroupLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","operation":"update","startUpdate":false,"type":"com.genushealthdb.data.Nodegroup"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"conditionTypeGrid.selectedItem","targetProperty":"sourceData"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Nodegroup","view":[{"caption":"NodegroupId","sortable":true,"dataIndex":"nodegroupId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Status","sortable":true,"dataIndex":"status","type":"java.lang.Byte","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {"onShow":"getConditionTypesSVar"}, {
conditionTypeGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n+ \"<div class='MobileRow'>Status: \" + ${status} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"nodegroupId","title":"NodegroupId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"status","title":"Status","width":"100px","align":"left","formatFunc":"","fieldType":"dojox.grid.cells.Select","editorProps":{"options":"Disabled,Test,Published","restrictValues":true},"mobileColumn":false},{"show":false,"field":"rootNodeId","title":"RootNodeId","width":"80px","displayType":"Number","align":"right","formatFunc":""}],"dsType":"com.genushealthdb.data.Nodegroup","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true,"width":"250px"}, {"onCellEdited":"conditionTypeGridCellEdited","onSelect":"getJsonFile"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getConditionTypesSVar","targetProperty":"dataSet"}, {}]
}]
}],
html1: ["wm.Html", {"height":"100%","minDesktopHeight":15}, {}]
}]
};

ReviewJsonPage.prototype._cssText = '';
ReviewJsonPage.prototype._htmlText = '';