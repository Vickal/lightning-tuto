({
	doInit : function(component, event, helper) {
		helper.getContacts(component, event);
	},
	doExpandAll : function(component, event, helper){
       helper.doFireExpandAllEvent(component, event);
    },
})