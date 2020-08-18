import { Component, OnInit } from '@angular/core';
import { AddressBookService } from '../services/address-book.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
  addressBook;
  filter = '';
  sortBy = 'firstName';
  showAddContact = false;
  view = 'tile';
  contactForEdit;
  selectedContact;
  viewContact = false;
  constructor(private addressBookService: AddressBookService) { }

  ngOnInit(): void {
    if (localStorage.getItem('sortBy')){
      this.sortBy = localStorage.getItem('sortBy');
    } else {
      localStorage.setItem('sortBy', 'firstName');
      this.sortBy = 'firstName';
    }
    this.addressBook = this.addressBookService.addressBookSubject$.pipe();
  }

  deleteContact(contactId){
    this.addressBookService.deleteContact(contactId);
  }

  editContact(record){
    this.contactForEdit = record;
    this.showAddContact = true;
  }

  setSortBy(){
    localStorage.setItem('sortBy', this.sortBy);
  }
}
