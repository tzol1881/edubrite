import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mobileMenu = true;
  @Output() showAddContact = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.setItem('user', '');
    this.router.navigate(['']);
  }
}
