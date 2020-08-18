import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { AddressBookService } from '../services/address-book.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  addContact: FormGroup;
  @Input() contactForEdit;
  @Output() hideAddContact = new EventEmitter();
  constructor(private formBuilder: FormBuilder, private addressBookService: AddressBookService) { }

  ngOnInit(): void {
    console.log(this.contactForEdit);
    this.addContact = this.formBuilder.group({
      firstName : [this.contactForEdit ? this.contactForEdit.firstName : '', [Validators.required, Validators.maxLength(25)]],
      lastName: [this.contactForEdit ? this.contactForEdit.lastName : '', [Validators.required, Validators.maxLength(25)]],
      birthDate: [this.contactForEdit ? this.contactForEdit.birthDate : '', Validators.required],
      email: this.contactForEdit ? this.formBuilder.array([]) : this.formBuilder.array([
        this.formBuilder.control('', [Validators.required, Validators.maxLength(40), Validators.email])
      ]),
      contactType: [this.contactForEdit ? this.contactForEdit.contactType : 'home'],
      contactNo: this.contactForEdit ? this.formBuilder.array([]) : this.formBuilder.array([
          this.formBuilder.control('', [Validators.required, Validators.minLength(13)])
       ])
    });

    if (this.contactForEdit) {
      this.addContactNoForEdit(this.contactForEdit.contactNo);
      this.addEmailForEdit(this.contactForEdit.email);
    }
  }

  get contactNo(){
    return this.addContact.get('contactNo') as FormArray;
  }

  get email(){
    return this.addContact.get('email') as FormArray;
  }

  addContactNo(contact = ''){
    this.contactNo.push(this.formBuilder.control(contact, Validators.minLength(13)));
  }

  addEmail(email = ''){
    this.email.push(this.formBuilder.control(email, [Validators.maxLength(40), Validators.email]));
  }

  onSubmit(){
    const record = this.addContact.getRawValue();
    if (this.contactForEdit) {
      record.contactId = this.contactForEdit.contactId;
    }
    this.contactForEdit ? this.addressBookService.editContact(record)
    : this.addressBookService.addContact(record);
    this.hideAddContact.emit(false);
  }

  addContactNoForEdit(contactNo){
    for (const contact of contactNo){
      this.addContactNo(contact);
    }
  }

  addEmailForEdit(email){
    for (const emailId of email){
      this.addEmail(emailId);
    }
  }
}
