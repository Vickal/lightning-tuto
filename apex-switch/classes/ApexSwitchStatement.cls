public class ApexSwitchStatement { 

	// As a literal value we can pass String, Integer, Long. Even we can call a method which return a value.
	public static void switchOnLiterals(String value){
		switch on value {
			when 'value_1' {
				System.debug('when value 1');
			}
			when 'value_2' {
				System.debug('when value 2');
			}
			when else {
				System.debug('default');
			}
		}
	}
	
	//A when block can have multiple, comma-separated literal clauses as well.
	public static void switchOnLiteralsWithMultipleValue(Integer i) {
		switch on i {
		   when 2, 3, 4 {
		       System.debug('when block 2 and 3 and 4');
		   }
		   when 5, 6 {
		       System.debug('when block 5 and 6');
		   }
		   when 7 {
		       System.debug('when block 7');
		   }
		   when null { //The value null is a legal value for all types(String, Integer, Long, sObject).
		       System.debug('when block 7');
		   }
		   when 7, 8 { //Not valid When statement. Each when value must be unique. For example, you can use the literal x only in one when block clause.
		   			   // A when block is matched one time at most.Here 7 is already used in previous when block. 
		   		System.debug('The when block is not valid');
		   }
		   when else {
		       System.debug('default');
		   }
		}
	}

	public static void switchOnsObject(List<Property__c> properties){
		for (Property__c prop: properties) {
			switch on (SObject) prop.Owner {
				when User u {
					System.debug('user ' + u);
				}
				when Group g {
					System.debug('Group ' + g);
				}
				when null {
					System.debug('default');
				}
			}
		}
	}
}