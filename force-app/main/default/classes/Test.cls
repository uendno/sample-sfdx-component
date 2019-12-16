public with sharing class Test {
    public Test() {
        
    }

    @AuraEnabled
    public static List<Contact> getContacts() {
        return [SELECT Id, Name FROM Contact];
    }
}
