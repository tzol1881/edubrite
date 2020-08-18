import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean;
  loginForm: FormGroup;
  showError = false;

  constructor(private router: Router, private loginFormBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.loginFormBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.isAuthenticated = this.loginForm.get('username').value === 'user' && this.loginForm.get('password').value === '123';
    if (this.isAuthenticated) {
      sessionStorage.setItem('user', 'user');
      this.router.navigate(['/address-book']);
    } else {
      this.showError = true;
    }
  }
}
