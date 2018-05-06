/***
   @Author: Vickal Gupta
   @Description: Get map of Account Name to Contact List.
*/
public class CustomAccordionController {
    
    @AuraEnabled
    public static Map<String, List<Contact>> getContacts(){
    		Map<String, List<Contact>> accToContacts = new Map<String, List<Contact>>();
    		
    		for(Contact con :[Select Id, FirstName, LastName, Account.Name, Phone, Email From Contact ]){
    			String accName = con.Account != null ? con.Account.Name : 'No Accounts';
    			if(!accToContacts.containsKey(accName)){
    				accToContacts.put(accName, new List<Contact>{con});
    			}else{
    				accToContacts.get(accName).add(con);
    			}
    		}
    		return accToContacts;
    }
}