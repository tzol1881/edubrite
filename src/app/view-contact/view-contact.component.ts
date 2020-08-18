import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
@Input() contact;
  constructor() { }

  ngOnInit(): void {
  }

}
