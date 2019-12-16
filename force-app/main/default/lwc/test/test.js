import { LightningElement, track } from 'lwc';
import getContacts from '@salesforce/apex/Test.getContacts';

export default class Test extends LightningElement {
  @track contacts;

  handleClick() {
    getContacts()
      .then(contacts => {
        this.contacts = contacts
      })
  } 
}