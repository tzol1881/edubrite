import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from '../app/address-book/address-book.component';
import { LoginComponent } from '../app/login/login.component';
import { CanActivateAddressBookGuard } from './services/can-activate-address-book.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'address-book', component: AddressBookComponent, canActivate: [CanActivateAddressBookGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
