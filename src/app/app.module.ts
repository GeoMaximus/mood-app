import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { ChartComponent } from './components/chart/chart.component';
import { ModalComponent } from './components/modal/modal.component';
import { LineGraphComponent } from './components/line-graph/line-graph.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { BrowserModule } from '@angular/platform-browser';


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
    SignupPageComponent,
    ChartComponent,
    ModalComponent,
    LineGraphComponent,
    DoughnutChartComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
