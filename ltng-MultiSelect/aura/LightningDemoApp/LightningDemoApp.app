<aura:application extends="force:slds">
<aura:attribute name="options" type="List" default="['India', 'Australia', 'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Singapore']"/>

<div class="slds-grid slds-wrap slds-gutters slds-m-top-xx_large">

	<div class="slds-col slds-size_1-of-1 slds-large-size_3-of-12"></div>
	<div class="slds-col slds-size_1-of-1 slds-large-size_3-of-12">
		<VIC:Lightning_MultiSelect options="{!v.options}" picklistLabel="Select Countries"/>
	</div>
</div>
	
</aura:application>
