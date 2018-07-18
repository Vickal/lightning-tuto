/**
 * Created by vickalgupta on 7/18/18.
 */

({
	removePills : function(component, event) {
		//var selectedItem = ;
        var pillToRemove = event.currentTarget.dataset.cnt; 
        var selectedPills = component.get("v.selectedPills");
        var currentOptions = component.get("v.options");
        component.set("v.selectedOpt", 'Select an option');
        var updatedPills = [];
        for (var i=0; i<selectedPills.length; i++) {
            if(pillToRemove != selectedPills[i]){
                updatedPills.push(selectedPills[i]);
            }else{
                currentOptions.push(selectedPills[i]);
            }
        }
        component.set("v.selectedPills", updatedPills);
        component.set("v.options", currentOptions);
        if (component.get("v.options").length > 0) {
            component.set("v.defaultSelected", 'Select an option');
            component.set("v.isAllSelected", false);
        } else {
            component.set("v.defaultSelected", 'None');
            component.set("v.isAllSelected", true);
        }
       // this.dispatchIntegrationSelectEvent(component, event, component.get("v.selectedPills"));
	},

    dispatchIntegrationSelectEvent : function(component, event, selectedVals){
    	var adcSelectEvent = $A.get('e.c:AdditionalDepositCurrencySelectEvent');
        adcSelectEvent.setParams({ "selectedADC" : selectedVals});
        adcSelectEvent.fire();
	}
})