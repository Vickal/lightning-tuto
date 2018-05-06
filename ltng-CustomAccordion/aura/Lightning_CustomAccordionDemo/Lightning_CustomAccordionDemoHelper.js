({
	getContacts : function(component, event) {
        var conList = [];
        var action = component.get("c.getContacts");
        action.setCallback(this, function(response){
            var state = response.getState();
            var results = response.getReturnValue();
            if(state === 'SUCCESS'){
            	for(key in results){
                conList.push({
                        accName: key,
                        value:results[key]
                    })
                }
                component.set("v.conList", conList); 
            }else {
                consol.log('---Error---');
            }
        });
        $A.enqueueAction(action);
    },
    
    doFireExpandAllEvent: function (component, event) {
        var isContactsExpanded = component.get("v.isContactsExpanded");
        var expandAllEvent = $A.get('e.VIC:ExpandAllEvent');

        if(isContactsExpanded){
            expandAllEvent.setParams({'isExpanded' : true });
            expandAllEvent.fire();
            component.set("v.isContactsExpanded", false);
        }else{
        		expandAllEvent.setParams({'isExpanded' : false });
            expandAllEvent.fire();
            component.set("v.isContactsExpanded", true);
        }
    }
})