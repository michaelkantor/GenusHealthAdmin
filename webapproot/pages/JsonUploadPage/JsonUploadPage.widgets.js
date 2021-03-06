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
}