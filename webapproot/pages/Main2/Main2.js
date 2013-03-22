

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