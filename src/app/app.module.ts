import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { FormComponent } from './components/form/form.component';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    HeaderComponent,
    FooterComponent,
    UserCardComponent,
    FormComponent,
    ManagerPageComponent,
    NotfoundPageComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
