import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { ViewpostsComponent } from './viewposts/viewposts.component';
import { UsersAppliedComponent } from './users-applied/users-applied.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';
<<<<<<< HEAD
import { UserAppliedPostComponent } from './user-applied-post/user-applied-post.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> d5348468f896c0da3875589ad226cb4c383e7470

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminhomeComponent,
    AddpostsComponent,
    ViewpostsComponent,
    UsersAppliedComponent,
    UserprofileComponent,
    UserHomeComponent,
    AdminPaymentComponent,
    UserAppliedPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
