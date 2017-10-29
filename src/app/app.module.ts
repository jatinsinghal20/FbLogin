import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { InputBoxComponent } from './input-box/input-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    MainBodyComponent,
    MyButtonComponent,
    HeaderComponent,
    RegistrationFormComponent,
    InputBoxComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
