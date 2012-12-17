

dojo.declare("Main2", wm.Page, {
	"preferredDevice": "desktop",
    start: function() {
        
    },

  
    

   
    getNodesLVarSuccess: function(inSender, inDeprecated) {        
        var node = inSender.getData()[0];
        var data = [{question: node.question, answer: node.answer}];
        while (node.node) {
            node = node.node;
            data.unshift({question: node.question, answer: node.answer});
        }
        this.nodeListVar.setData(data);
    },
    _end: 0
});