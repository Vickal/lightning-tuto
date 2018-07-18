/**
 * Created by vickalgupta on 7/18/18.
 */
({
	doInit : function(component, event, helper) {
		// @TODO: Anything on component load.
	},

    onOptionSelect : function(component, event, helper){
    	var currentOptions = component.get("v.options");
        var selectedOption = component.get("v.selectedOpt");
        var selectedPills = component.get("v.selectedPills");
        var newOptions = [];
        for (var i=0; i < currentOptions.length; i++) {
            if (selectedOption != currentOptions[i]) {
                newOptions.push(currentOptions[i]);
            }
            if ((selectedOption == currentOptions[i]) && selectedPills.indexOf(selectedOption)<0) {
                selectedPills.push(selectedOption);
            }
        }
        component.set("v.options", newOptions);
        component.set("v.selectedPills", selectedPills);
        if (component.get("v.options").length > 0) {
            component.set("v.defaultSelected", 'Select an option');
            component.set("v.isAllSelected", false);
        } else {
            component.set("v.defaultSelected", 'None');
            component.set("v.isAllSelected", true);
        }
   },

    doRemovePills : function(component, event, helper){
       helper.removePills(component, event);
    }

})