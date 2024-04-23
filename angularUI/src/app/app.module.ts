import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, FormArray } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InterviewComponent } from './interview/interview.component';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SupportComponent } from './support/support.component';
import { SignupComponent } from './signup/signup.component';

import { InterviewService } from './interview.service';
import { StatusComponent } from './status/status.component';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    InterviewComponent,
    HomeComponent,
    PositionComponent,
    RegisterComponent,
    LoginComponent,
    SupportComponent,
    SignupComponent,
    StatusComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    BrowserAnimationsModule
  ],
  providers: [

    InterviewService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
