dojo.declare("Main2", wm.Page, {
"preferredDevice": "desktop",
start: function() {
},
/*
getNodesLVarSuccess: function(inSender, inDeprecated) {
var node = inSender.getData()[0];
var data = [{question: node.question, answer: node.answer}];
this.nodeListVar.addItem(data);
if (node.parentId) {
wm.onidle(this, function() {
inSender.filter.setValue("nodeId", node.parentId);
});
}
},
*/
getNodeListSVarSuccess: function(inSender, inDeprecated) {
if (!this.nodeListVar.isUpdating()) this.nodeListVar.beginUpdate();
var node = inSender.getData()[0];
var data = {question: node.question, answer: node.answer};
this.nodeListVar.addItem(data);
if (node.parent_id) {
wm.onidle(this, function() {
inSender.input.setValue("nodeId", node.parent_id);
inSender.update();
});
} else {
this.nodeListVar.endUpdate();
this.nodeListVar.setData(this.nodeListVar.getData().reverse());
this.nodeListVar.notify();
}
},
_end: 0
});

Main2.widgets = {
sessionsLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.genushealthdb.data.Usersessions"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"userSessionsGrid","targetProperty":"loadingDialog"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"conditionTypesGrid.selectedItem.modelDiagnosis","targetProperty":"filter.modelDiagnosis"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"conditionTypesGrid.selectedItem.conditionType","targetProperty":"filter.conditionType"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Usersessions","view":[{"caption":"SessionId","sortable":true,"dataIndex":"sessionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"ConditionType","sortable":true,"dataIndex":"conditionType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"ModelDiagnosis","sortable":true,"dataIndex":"modelDiagnosis","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"PatientId","sortable":true,"dataIndex":"patientId","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Feedback","sortable":true,"dataIndex":"feedback","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null}]}, {}]
}],
messagesLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.genushealthdb.data.Messages"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire1: ["wm.Wire", {"expression":undefined,"source":"messagesGrid","targetProperty":"loadingDialog"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"userSessionsGrid.selectedItem","targetProperty":"filter.userSessions"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Messages","view":[{"caption":"MessageId","sortable":true,"dataIndex":"messageId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"Sender","sortable":true,"dataIndex":"sender","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"Text","sortable":true,"dataIndex":"text","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"}]}, {}]
}],
getByDiagnosisSVar: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"groupByDiagnosis","service":"GenusHealthDB"}, {}, {
input: ["wm.ServiceInput", {"type":"groupByDiagnosisInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"conditionTypesGrid.selectedItem.conditionType","targetProperty":"conditionType"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"versionSelect.dataValue","targetProperty":"version"}, {}]
}]
}]
}],
getNodesLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.genushealthdb.data.Node"}, {"onSuccess":"getNodesLVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeCountsGrid.selectedItem.nodeId","targetProperty":"filter.nodeId"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Node","related":["node","node.node","node.node.node","node.node.node.node","node.node.node.node.node","node.node.node.node.node.node","node.node.node.node.node.node.node","node.node.node.node.node.node.node.node","node.node.node.node.node.node.node.node.node","node.node.node.node.node.node.node.node.node.node","node.node.node.node.node.node.node.node.node.node.node","node.node.node.node.node.node.node.node.node.node.node.node"],"view":[{"caption":"Parent_id","sortable":true,"dataIndex":"parent_id","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"NodeId","sortable":true,"dataIndex":"nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":3000,"subType":null,"widthUnits":"px"},{"caption":"Answer","sortable":true,"dataIndex":"answer","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3001,"subType":null,"widthUnits":"px"},{"caption":"Question","sortable":true,"dataIndex":"question","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3002,"subType":null,"widthUnits":"px"},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3003,"subType":null,"widthUnits":"px"},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3004,"subType":null,"widthUnits":"px"},{"caption":"NodeId","sortable":true,"dataIndex":"node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4000},{"caption":"Answer","sortable":true,"dataIndex":"node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4001},{"caption":"Question","sortable":true,"dataIndex":"node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":4004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5001},{"caption":"Question","sortable":true,"dataIndex":"node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":9000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":9001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":9002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":9003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":9004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.node.node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.node.node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.node.node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":10004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":11000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":11001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":11002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":11003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":11004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":12000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":12001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":12002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":12003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":12004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":13000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":13001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":13002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":13003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":13004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":14000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":14001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":14002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":14003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":14004},{"caption":"NodeId","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.node.nodeId","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":15000},{"caption":"Answer","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.node.answer","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":15001},{"caption":"Question","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.node.question","type":"java.lang.String","displayType":"Text","required":false,"widthUnits":"px","includeLists":true,"includeForms":true,"order":15002},{"caption":"CreatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.node.createdAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":15003},{"caption":"UpdatedAt","sortable":true,"dataIndex":"node.node.node.node.node.node.node.node.node.node.node.node.updatedAt","type":"java.util.Date","displayType":"Date","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":15004}]}, {}]
}],
nodeListVar: ["wm.Variable", {"isList":true,"type":"com.genushealthdb.data.Node"}, {}],
getConditionTypesSVar: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"synopsisQuery","service":"GenusHealthDB"}, {}, {
input: ["wm.ServiceInput", {"type":"synopsisQueryInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"versionSelect.dataValue","targetProperty":"version"}, {}]
}]
}]
}],
nodeCountsSVar: ["wm.ServiceVariable", {"autoUpdate":true,"inFlightBehavior":"executeLast","operation":"groupByNodeId","service":"GenusHealthDB"}, {}, {
input: ["wm.ServiceInput", {"type":"groupByNodeIdInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"conditionTypesGrid.selectedItem.conditionType","targetProperty":"conditionType"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"diagnosisGrid.selectedItem.modelDiagnosis","targetProperty":"modelDiagnosis"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"versionSelect.dataValue","targetProperty":"version"}, {}]
}]
}]
}],
dispositionsLiveVariable1: ["wm.LiveVariable", {"type":"com.genushealthdb.data.Dispositions"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Dispositions","related":["feedbackquestionset"],"view":[{"caption":"DispositionId","sortable":true,"dataIndex":"dispositionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Text","sortable":true,"dataIndex":"text","type":"java.sql.Clob","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"ModifiedAt","sortable":true,"dataIndex":"modifiedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"DisplayName","sortable":true,"dataIndex":"displayName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Feedbackquestionsetid","sortable":true,"dataIndex":"feedbackquestionset.feedbackquestionsetid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"feedbackquestionset.name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
logoutSVar: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
getNodeListSVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getNodeById","service":"GenusHealthDB"}, {"onSuccess":"getNodeListSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"getNodeByIdInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeCountsGrid.selectedItem.nodeId","targetProperty":"nodeId"}, {}]
}]
}]
}],
getVersionListSvar: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getSessionVersions","service":"GenusHealthDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getSessionVersionsInputs"}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel2: ["wm.HeaderContentPanel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Genus Health Admin","height":"100%","padding":"4","styles":{"fontSize":"20px","textAlign":"center"},"width":"100%"}, {}],
versionSelect: ["wm.SelectMenu", {"allowNone":true,"caption":undefined,"dataField":"version","dataType":"com.genushealthdb.data.output.GetSessionVersionsRtnType","dataValue":undefined,"displayField":"version","displayValue":"","placeHolder":"Select Version","width":"150px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getVersionListSvar","targetProperty":"dataSet"}, {}]
}]
}],
logoutButton: ["wm.Button", {"caption":"Logout","height":"100%","margin":"4","width":"100px"}, {"onclick":"logoutSVar"}]
}],
breadcrumbLayers1: ["wm.TabLayers", {"manageURL":true}, {}, {
synopsisLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Usage Reports","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
conditionTypesGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Count: \" + ${count} + \"</div>\"\n+ \"<div class='MobileRow'>ConditionType: \" + ${conditionType} + \"</div>\"\n","mobileColumn":false},{"show":true,"field":"count","title":"Count","width":"100%","displayType":"Java.lang.Long","align":"left","formatFunc":""},{"show":true,"field":"conditionType","title":"ConditionType","width":"100%","displayType":"Java.lang.String","align":"left","formatFunc":""}],"dsType":"com.genushealth.data.output.SynopsisQueryRtnType","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true,"width":"200px"}, {"onSelect":"userSessionListLayer","onSelect1":"getNodesLVar.clearData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getConditionTypesSVar","targetProperty":"dataSet"}, {}]
}]
}],
diagnosisGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Count: \" + ${count} + \"</div>\"\n","mobileColumn":false},{"show":true,"field":"count","title":"Count","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"modelDiagnosis","title":"ModelDiagnosis","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"${modelDiagnosis} || \"<i>Incomplete</i>\"","mobileColumn":false}],"dsType":"com.genushealthdb.data.output.GroupByDiagnosisRtnType","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"width":"200undefined"}, {"onSelect":"getNodesLVar.clearData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getByDiagnosisSVar","targetProperty":"dataSet"}, {}]
}]
}],
nodeCountsGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Tree Node ID: \" + ${nodeId} + \"</div>\"\n+ \"<div class='MobileRow'>Count: \" + ${count} + \"</div>\"\n","mobileColumn":false},{"show":true,"field":"nodeId","title":"Tree Node ID","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},{"show":true,"field":"count","title":"Count","width":"80px","align":"left","editorProps":{"restrictValues":true},"isCustomField":true,"mobileColumn":false}],"height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"width":"200px"}, {"onSelect":"getNodeListSVar","onSelect1":"nodeListVar.clearData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeCountsSVar","targetProperty":"dataSet"}, {}]
}]
}],
nodeDescriptionGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"nodeId","title":"NodeId","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"answer","title":"Conversation for Node","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"(${answer} ? \"<div class='AnswerEntry'>\" + ${answer} + \"</div>\" : \"\") \n+\n(${question} ? \"<div class='QuestionEntry'>\" + ${question} + \"</div>\" : \"\") \n\n","mobileColumn":false},{"show":false,"field":"question","title":"question","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":false}],"height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true,"width":"400px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"nodeListVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
uploadJsonLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Upload Json Data","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"JsonUploadPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}],
reviewJsonLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Review Json","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"ReviewJsonPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
reviewSessionsLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Sessions","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
pageContainer3: ["wm.PageContainer", {"deferLoad":true,"pageName":"SessionsPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
dispositionsLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Dispositions","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
GenusHealthDBLivePanel: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
dispositionsGridPanel: ["wm.FancyPanel", {"minHeight":220,"title":"Dispositions"}, {}, {
dispositionsDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"field":"dispositionId","title":"DispositionId","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"modifiedAt","title":"Modified","width":"100px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"dateType":"date and time"},"editorProps":{"restrictValues":true},"backgroundColor":"if (!${text}) \"red\"","mobileColumn":false},{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"text","title":"Text","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Modified: \" + wm.List.prototype.dateFormatter({\"dateType\":\"date and time\"}, null,null,null,${modifiedAt}) + \"</div>\"\n+ \"<div class='MobileRow'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"displayName","title":"DisplayName","width":"100%","displayType":"Text","align":"left","formatFunc":""},{"show":false,"field":"feedbackquestionset.feedbackquestionsetid","title":"Feedbackquestionset.feedbackquestionsetid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"feedbackquestionset.name","title":"Feedbackquestionset.name","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.genushealthdb.data.Dispositions","height":"100%","margin":"4"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"dispositionsLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}]
}],
dispositionsDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"482px","title":"Details"}, {}, {
dispositionsDBForm: ["wm.DBForm", {"captionAlign":"left","captionPosition":"top","captionSize":"28px","desktopHeight":"340px","editorHeight":"54px","fitToContentHeight":true,"height":"450px","isCompositeKey":false,"mobileHeight":"340px","readonly":true,"readonlyManager":true,"type":"com.genushealthdb.data.Dispositions"}, {"onEnterKeyPress":"dispositionsDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"dispositionsDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
wire1: ["wm.Wire", {"source":"dispositionsDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
wire2: ["wm.Wire", {"source":"dispositionsDBFormEditButton","targetId":null,"targetProperty":"editButton"}, {}],
wire3: ["wm.Wire", {"source":"dispositionsDBFormDeleteButton","targetId":null,"targetProperty":"deleteButton"}, {}],
wire4: ["wm.Wire", {"source":"dispositionsDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
wire5: ["wm.Wire", {"source":"dispositionsDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}],
wire6: ["wm.Wire", {"source":"dispositionsDojoGrid.selectedItem","targetId":null,"targetProperty":"dataSet"}, {}]
}],
dispositionIdEditor1: ["wm.Number", {"caption":"DispositionId","captionAlign":"left","captionPosition":"top","captionSize":"28px","changeOnKey":true,"dataValue":0,"desktopHeight":"54px","emptyValue":"zero","formField":"dispositionId","height":"54px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
nameEditor1: ["wm.Text", {"caption":"Disposition Code","captionAlign":"left","captionPosition":"top","captionSize":"28px","changeOnKey":true,"dataValue":"","desktopHeight":"54px","emptyValue":"emptyString","formField":"name","height":"54px","readonly":true,"required":true,"width":"100%"}, {}],
dispositionDisplayNameEditor: ["wm.Text", {"caption":"Name shown to users","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataValue":"","desktopHeight":"54px","emptyValue":"emptyString","formField":"displayName","height":"54px","readonly":true,"width":"100%"}, {}],
feedbackQuestionSetLookup: ["wm.Lookup", {"caption":"Feedback Question Set Name","captionAlign":"left","captionPosition":"top","captionSize":"28px","dataType":"com.genushealthdb.data.Feedbackquestionset","dataValue":undefined,"desktopHeight":"54px","displayField":"name","formField":"feedbackquestionset","height":"54px","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"feedbackQuestionSetLookup.liveVariable","targetProperty":"dataSet"}, {}]
}]
}],
textEditor1: ["wm.RichText", {"caption":"Text","captionSize":"28px","desktopHeight":"250px","formField":"text","height":"250px","readonly":true,"toolbarFormatName":true,"toolbarLink":true}, {"onchange":"textEditor1Change"}],
createdAtEditor1: ["wm.DateTime", {"caption":"CreatedAt","captionAlign":"left","captionPosition":"top","captionSize":"28px","desktopHeight":"54px","emptyValue":"zero","formField":"createdAt","height":"54px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
modifiedAtEditor1: ["wm.DateTime", {"caption":"ModifiedAt","captionAlign":"left","captionPosition":"top","captionSize":"28px","desktopHeight":"54px","emptyValue":"zero","formField":"modifiedAt","height":"54px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"new Date().getTime()","targetProperty":"dataValue"}, {}]
}]
}],
dispositionsDBFormButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
dispositionsDBFormNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"dispositionsDBForm.editNewObject"}],
dispositionsDBFormEditButton: ["wm.Button", {"caption":"Edit","margin":"4"}, {"onclick":"dispositionsDBForm.editCurrentObject"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"dispositionsDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
dispositionsDBFormDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"dispositionsDBForm.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"dispositionsDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
dispositionsDBFormCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4","showing":false}, {"onclick":"dispositionsDBForm.cancelEdit"}],
dispositionsDBFormSaveButton: ["wm.Button", {"caption":"Save","margin":"4","showing":false}, {"onclick":"dispositionsDBForm.saveData"}]
}]
}]
}]
}]
}],
feedbackLayer: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Feedback","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
feedbackPageContainer: ["wm.PageContainer", {"deferLoad":true,"pageName":"FeedbackPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}]
};

Main2.prototype._cssText = '.HideChildren ol {\
display: none;\
}\
li.HasChildren.HideChildren:before {\
content: "+ ";\
}\
li.HasChildren:before {\
content: "- ";\
}\
li > .Anchor {\
text-decoration: underline;\
cursor: pointer;\
}\
.QuestionEntry {\
font-weight: bold;\
}\
.AnswerEntry {\
margin-left: 20px;\
}\
';
Main2.prototype._htmlText = '';