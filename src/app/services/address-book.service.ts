import { Injectable } from '@angular/core';
import { AddressBook } from '../../assets/mock-data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  addressBook = AddressBook;
  addressBookSubject$ = new BehaviorSubject<any>([]);
  constructor() {
    this.getAddressBook();
   }

  getAddressBook(){
    this.addressBookSubject$.next(this.addressBook);
  }

  addContact(contact) {
    contact.contactId = this.addressBook.length + 1;
    this.addressBook.push(contact);
    this.getAddressBook();
  }

  editContact(contact) {
    const existingContactIndex = this.addressBook.findIndex(contacts => contacts.contactId === contact.contactId);
    this.addressBook[existingContactIndex] = contact;
    this.getAddressBook();
  }

  deleteContact(contact) {
    const existingContactIndex = this.addressBook.findIndex(contacts => contacts.contactId === contact);
    if (existingContactIndex !== -1) {
      this.addressBook.splice(existingContactIndex, 1);
    }
    this.getAddressBook();
  }
}
