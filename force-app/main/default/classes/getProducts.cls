public with sharing class getProducts {
    @AuraEnabled(cacheable = true)

    public static List<Product2> getSingleProduct(string productTypeId) {

         List<Product2> prod = [Select Id, Name, Color__c, Description__c, Price__c, Dimension__c, Size__c      
                                  From Product2 ];

            

            
            return prod;



    }
}
