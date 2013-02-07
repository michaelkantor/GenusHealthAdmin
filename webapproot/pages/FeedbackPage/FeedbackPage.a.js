dojo.declare("FeedbackPage", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

FeedbackPage.widgets = {
feedbackquestionLiveVariable1: ["wm.LiveVariable", {"inFlightBehavior":"executeAll","orderBy":"asc: ordernumber","type":"com.genushealthdb.data.Feedbackquestions"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"questionSetGrid.selectedItem","targetProperty":"filter.feedbackquestionset"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Feedbackquestions","related":["feedbackquestionset"],"view":[{"caption":"Feedbackquestionid","sortable":true,"dataIndex":"feedbackquestionid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"Question","sortable":true,"dataIndex":"question","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"Ordernumber","sortable":true,"dataIndex":"ordernumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"Feedbackquestionsetid","sortable":true,"dataIndex":"feedbackquestionset.feedbackquestionsetid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":2000,"subType":null,"widthUnits":"px"},{"caption":"Name","sortable":true,"dataIndex":"feedbackquestionset.name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2001,"subType":null,"widthUnits":"px"}]}, {}]
}],
feedbackresponsesLiveVariable1: ["wm.LiveVariable", {"inFlightBehavior":"executeAll","type":"com.genushealthdb.data.Feedbackresponses"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"questionsGrid.selectedItem.feedbackquestionid","targetProperty":"filter.feedbackquestions.feedbackquestionid"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Feedbackresponses","related":["feedbackquestions"],"view":[{"caption":"Feedbackresponseid","sortable":true,"dataIndex":"feedbackresponseid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Answer","sortable":true,"dataIndex":"answer","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
questionsetLiveVariable1: ["wm.LiveVariable", {"inFlightBehavior":"executeAll","type":"com.genushealthdb.data.Feedbackquestionset"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Feedbackquestionset","view":[{"caption":"Feedbackquestionsetid","sortable":true,"dataIndex":"feedbackquestionsetid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
questionSetGridPanel: ["wm.Panel", {"border":"0,1,0,0","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"250px"}, {}, {
questionSetGrid: ["wm.DojoGrid", {"border":"0,2,0,0","borderColor":"#666666","columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Question Set Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":true,"field":"name","title":"Question Set Name","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"","mobileColumn":false},{"show":false,"field":"feedbackquestionsetid","title":"Feedbackquestionsetid","width":"80px","displayType":"Number","align":"right","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"questionsetLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
feedbackquestionsetDBForm: ["wm.DBForm", {"height":"100%","isCompositeKey":false,"layoutKind":"left-to-right","readonly":true,"readonlyManager":true,"type":"com.genushealthdb.data.Feedbackquestionset"}, {"onEnterKeyPress":"feedbackquestionsetDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackquestionsetDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
wire1: ["wm.Wire", {"source":"feedbackquestionsetDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
wire2: ["wm.Wire", {"source":"feedbackquestionsetDBFormEditButton","targetId":null,"targetProperty":"editButton"}, {}],
wire3: ["wm.Wire", {"source":"feedbackquestionsetDBFormDeleteButton","targetId":null,"targetProperty":"deleteButton"}, {}],
wire4: ["wm.Wire", {"source":"feedbackquestionsetDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
wire5: ["wm.Wire", {"source":"feedbackquestionsetDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}],
wire6: ["wm.Wire", {"source":"questionSetGrid.selectedItem","targetId":null,"targetProperty":"dataSet"}, {}]
}],
feedbackquestionsetDBFormEditorFormPanel: ["wm.FormPanel", {"height":"100%"}, {}, {
nameEditor1: ["wm.Text", {"caption":"Name","captionSize":"80px","changeOnKey":true,"dataValue":"","desktopHeight":"26px","emptyValue":"emptyString","formField":"name","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
feedbackquestionsetidEditor1: ["wm.Number", {"caption":"Feedbackquestionsetid","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"feedbackquestionsetid","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
spacer1: ["wm.Spacer", {"height":"100%","width":"1px"}, {}],
feedbackquestionsetDBFormButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
feedbackquestionsetDBFormNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"feedbackquestionsetDBForm.editNewObject"}],
feedbackquestionsetDBFormEditButton: ["wm.Button", {"caption":"Edit","margin":"4"}, {"onclick":"feedbackquestionsetDBForm.editCurrentObject"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackquestionsetDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
feedbackquestionsetDBFormDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"feedbackquestionsetDBForm.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackquestionsetDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
feedbackquestionsetDBFormCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4","showing":false}, {"onclick":"feedbackquestionsetDBForm.cancelEdit"}],
feedbackquestionsetDBFormSaveButton: ["wm.Button", {"caption":"Save","margin":"4","showing":false}, {"onclick":"feedbackquestionsetDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${feedbackquestionsetDBForm.invalid} || !${feedbackquestionsetDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}],
panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${questionSetGrid.isRowSelected} || Boolean(window[\"studio\"])","targetProperty":"showing"}, {}]
}],
questionsGridPanel: ["wm.Panel", {"border":"0,2,0,0","borderColor":"#666666","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"250px"}, {}, {
questionsGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"ordernumber","title":"O","width":"40px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},{"show":true,"field":"question","title":"Question","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>O: \" + ${ordernumber} + \"</div>\"\n+ \"<div class='MobileRow'>Question: \" + ${question} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"feedbackquestionid","title":"Feedbackquestionid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"feedbackquestionset.feedbackquestionsetid","title":"Feedbackquestionset.feedbackquestionsetid","width":"80px","displayType":"Number","align":"right","formatFunc":""},{"show":false,"field":"feedbackquestionset.name","title":"Feedbackquestionset.name","width":"100%","displayType":"Text","align":"left","formatFunc":""}],"dsType":"com.genushealthdb.data.FeedbackQuestion","height":"50%","margin":"0","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"feedbackquestionLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
feedbackQuestionDBForm: ["wm.DBForm", {"height":"50%","isCompositeKey":false,"readonly":true,"readonlyManager":true,"type":"com.genushealthdb.data.Feedbackquestions"}, {"onEnterKeyPress":"feedbackQuestionDBForm.saveData","onSuccess":"feedbackquestionLiveVariable1"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackQuestionDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
wire1: ["wm.Wire", {"source":"feedbackQuestionDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
wire2: ["wm.Wire", {"source":"feedbackQuestionDBFormEditButton","targetId":null,"targetProperty":"editButton"}, {}],
wire3: ["wm.Wire", {"source":"feedbackQuestionDBFormDeleteButton","targetId":null,"targetProperty":"deleteButton"}, {}],
wire4: ["wm.Wire", {"source":"feedbackQuestionDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
wire5: ["wm.Wire", {"source":"feedbackQuestionDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}],
wire6: ["wm.Wire", {"expression":undefined,"source":"questionsGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
feedbackQuestionDBFormEditorFormPanel: ["wm.FormPanel", {"captionAlign":"left","height":"100%"}, {}, {
questionSetLookup1: ["wm.Lookup", {"caption":"Feedbackquestionset","captionAlign":"left","captionSize":"120px","dataType":"com.genushealthdb.data.Feedbackquestionset","desktopHeight":"26px","displayField":"name","formField":"feedbackquestionset","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"questionSetLookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"questionSetGrid.selectedItem","targetProperty":"dataValue"}, {}]
}]
}],
selectMenu1: ["wm.SelectMenu", {"caption":"Order","captionAlign":"left","captionSize":"120px","dataField":"dataValue","desktopHeight":"26px","displayField":"dataValue","formField":"ordernumber","height":"26px","options":"0,1,2,3,4,5,6,7,8,9","readonly":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"var max = 0;\nthis.feedbackquestionLiveVariable1.forEach(function(item) {\n   if (item.getValue(\"ordernumber\") > max) max = item.getValue(\"ordernumber\");\n});\nmax + 1;","targetProperty":"dataValue"}, {}]
}]
}],
questionEditor1: ["wm.LargeTextArea", {"caption":"Question","captionPosition":"left","captionSize":"120px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"question","height":"100%","readonly":true,"required":true,"width":"100%"}, {}],
feedbackquestionidEditor1: ["wm.Number", {"caption":"Feedbackquestionid","captionAlign":"left","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"feedbackquestionid","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}]
}],
feedbackQuestionDBFormButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
feedbackQuestionDBFormNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"feedbackQuestionDBForm.editNewObject"}],
feedbackQuestionDBFormEditButton: ["wm.Button", {"caption":"Edit","margin":"4"}, {"onclick":"feedbackQuestionDBForm.editCurrentObject"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackQuestionDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
feedbackQuestionDBFormDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"feedbackQuestionDBForm.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackQuestionDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
feedbackQuestionDBFormCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4","showing":false}, {"onclick":"feedbackQuestionDBForm.cancelEdit"}],
feedbackQuestionDBFormSaveButton: ["wm.Button", {"caption":"Save","margin":"4","showing":false}, {"onclick":"feedbackQuestionDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${feedbackQuestionDBForm.invalid} || !${feedbackQuestionDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"250px"}, {}, {
feedbackresponsesLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${questionsGrid.isRowSelected} || Boolean(window[\"studio\"])","targetProperty":"showing"}, {}]
}],
feedbackresponsesDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"feedbackresponseid","title":"Feedbackresponseid","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":true,"field":"answer","title":"Answer","width":"100%","align":"left","formatFunc":"","mobileColumn":false}],"dsType":"com.genushealthdb.data.FeedbackResponses","height":"50%","margin":"0"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackresponsesLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
feedbackresponsesDBForm: ["wm.DBForm", {"height":"50%","isCompositeKey":false,"readonly":true,"readonlyManager":true,"type":"com.genushealthdb.data.Feedbackresponses"}, {"onEnterKeyPress":"feedbackresponsesDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackresponsesDBFormButtonPanel","targetId":null,"targetProperty":"buttonPanel"}, {}],
wire1: ["wm.Wire", {"source":"feedbackresponsesDBFormNewButton","targetId":null,"targetProperty":"newButton"}, {}],
wire2: ["wm.Wire", {"source":"feedbackresponsesDBFormEditButton","targetId":null,"targetProperty":"editButton"}, {}],
wire3: ["wm.Wire", {"source":"feedbackresponsesDBFormDeleteButton","targetId":null,"targetProperty":"deleteButton"}, {}],
wire4: ["wm.Wire", {"source":"feedbackresponsesDBFormCancelButton","targetId":null,"targetProperty":"cancelButton"}, {}],
wire5: ["wm.Wire", {"source":"feedbackresponsesDBFormSaveButton","targetId":null,"targetProperty":"saveButton"}, {}],
wire6: ["wm.Wire", {"source":"feedbackresponsesDojoGrid.selectedItem","targetId":null,"targetProperty":"dataSet"}, {}]
}],
feedbackresponseidEditor1: ["wm.Number", {"caption":"Feedbackresponseid","captionSize":"120px","changeOnKey":true,"dataValue":0,"desktopHeight":"26px","emptyValue":"zero","formField":"feedbackresponseid","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}],
answerEditor1: ["wm.LargeTextArea", {"caption":"Answer","captionPosition":"left","captionSize":"120px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"answer","height":"100%","readonly":true,"required":true,"width":"100%"}, {}],
feedbackquestionsLookup1: ["wm.Lookup", {"caption":"Feedbackquestions","captionSize":"120px","dataType":"com.genushealthdb.data.Feedbackquestions","desktopHeight":"26px","displayField":"question","formField":"feedbackquestions","height":"26px","readonly":true,"required":true,"showing":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"feedbackquestionsLookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"questionsGrid.selectedItem","targetProperty":"dataValue"}, {}]
}]
}],
feedbackresponsesDBFormButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
feedbackresponsesDBFormNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"feedbackresponsesDBForm.editNewObject"}],
feedbackresponsesDBFormEditButton: ["wm.Button", {"caption":"Edit","margin":"4"}, {"onclick":"feedbackresponsesDBForm.editCurrentObject"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackresponsesDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
feedbackresponsesDBFormDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"feedbackresponsesDBForm.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"feedbackresponsesDBForm.noDataSet","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
feedbackresponsesDBFormCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4","showing":false}, {"onclick":"feedbackresponsesDBForm.cancelEdit"}],
feedbackresponsesDBFormSaveButton: ["wm.Button", {"caption":"Save","margin":"4","showing":false}, {"onclick":"feedbackresponsesDBForm.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${feedbackresponsesDBForm.invalid} || !${feedbackresponsesDBForm.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
};

FeedbackPage.prototype._cssText = '';
FeedbackPage.prototype._htmlText = '';