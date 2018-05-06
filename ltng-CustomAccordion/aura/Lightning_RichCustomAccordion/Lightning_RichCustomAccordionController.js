({
	doToggle : function(component, event, helper) {
		helper.toggleCollapseHandler(component, event);
	},

	doExpandAll: function(component,event,helper){
        helper.doHandleExpandAll(component,event);
    }
})