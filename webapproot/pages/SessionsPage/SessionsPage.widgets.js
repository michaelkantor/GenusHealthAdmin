SessionsPage.widgets = {
	sessionsLVar: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","orderBy":"desc:sessionId","type":"com.genushealthdb.data.UserSessions"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.UserSessions","view":[{"caption":"SessionId","sortable":true,"dataIndex":"sessionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"ConditionType","sortable":true,"dataIndex":"conditionType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"ModelDiagnosis","sortable":true,"dataIndex":"modelDiagnosis","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"PatientId","sortable":true,"dataIndex":"patientId","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},{"caption":"Feedback","sortable":true,"dataIndex":"feedback","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"Version","sortable":true,"dataIndex":"version","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null}]}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"[main2].versionSelect.dataValue","targetProperty":"filter.version"}, {}]
		}]
	}],
	messagesLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","orderBy":"asc: messageId","startUpdate":false,"type":"com.genushealthdb.data.Messages"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"sessionsGrid.selectedItem","targetProperty":"filter.userSessions"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Messages","view":[{"caption":"MessageId","sortable":true,"dataIndex":"messageId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Sender","sortable":true,"dataIndex":"sender","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Text","sortable":true,"dataIndex":"text","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}]}, {}]
	}],
	filterSessionsSVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"filterSessions","service":"GenusHealthDB","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"filterSessionsInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[main2].versionSelect.dataValue","targetProperty":"version"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"afterEditor.dataValue","targetProperty":"after"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"beforeEditor.dataValue","targetProperty":"before"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		toolbarPanel: ["wm.Panel", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
			toCSVButton: ["wm.Button", {"caption":"To CSV","margin":"4"}, {"onclick":"toCSVButtonClick"}],
			afterEditor: ["wm.Date", {"caption":"After","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
			beforeEditor: ["wm.Date", {"caption":"Before","dataValue":undefined,"displayValue":"","width":"200px"}, {}],
			showUserToggle: ["wm.ToggleButton", {"captionDown":"Show All Users","captionUp":"Show Selected User","margin":"4","width":"164px"}, {"onclick":"showUserToggleClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"sessionsGrid.emptySelection","targetProperty":"disabled"}, {}]
				}]
			}]
		}],
		sessionsGrid: ["wm.DojoGrid", {"columns":[{"show":false,"field":"sessionId","title":"SessionId","width":"80px","align":"right","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"conditionType","title":"Condition","width":"100px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"modelDiagnosis","title":"Diagnosis","width":"200px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"${modelDiagnosis}.replace(/^Disposition_?/i,\"\")","mobileColumn":false},{"show":true,"field":"patientId","title":"PatientId","width":"150px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"createdAt","title":"CreatedAt","width":"120px","align":"left","formatFunc":"wm_date_formatter","formatProps":{"dateType":"date and time"},"editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"updatedAt","title":"UpdatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":true,"field":"feedback","title":"Feedback","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"var data = dojo.fromJson(${feedback});\nvar result = \"\";\nfor (var name in data) {\n    if (result) result += \"<br/>\";\n    result += name + \": \" + data[name];\n}\nresult;","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Condition: \" + ${conditionType} + \"</div>\"\n+ \"<div class='MobileRow'>PatientId: \" + ${patientId} + \"</div>\"\n+ \"<div class='MobileRow'>CreatedAt: \" + wm.List.prototype.dateFormatter({\"dateType\":\"date and time\"}, null,null,null,${createdAt}) + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"version","title":"Version","width":"100%","align":"left","formatFunc":"","mobileColumn":false}],"height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {"onSelect":"messagesLVar","onSelect1":"sessionsGridSelect1"}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"filterSessionsSVar","targetProperty":"dataSet"}, {}]
			}]
		}],
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			messagesGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"messageId","title":"MessageId","width":"80px","align":"right","formatFunc":"","mobileColumn":false},{"show":false,"field":"sender","title":"Sender","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"text","title":"Text","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"${text}.indexOf(\"data:image/\") == 0 ? \"<img src='\" + ${text} + \"'/>\" : ${text}","mobileColumn":false},{"show":false,"field":"createdAt","title":"CreatedAt","width":"80px","align":"left","formatFunc":"wm_date_formatter","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>MessageId: \" + ${messageId} + \"</div>\"\n","mobileColumn":false}],"dsType":"com.genushealthdb.data.Messages","height":"100%","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"messagesLVar","targetProperty":"dataSet"}, {}]
				}]
			}]
		}]
	}]
}