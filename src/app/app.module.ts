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
import { ChartComponent } from './components/chart/chart.component';
import { ModalComponent } from './components/modal/modal.component';
import { LineGraphComponent } from './components/line-graph/line-graph.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './modules/login/login-routing.module';
import { RegisterRoutingModule } from './modules/register/register-routing.module';


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
    ChartComponent,
    ModalComponent,
    LineGraphComponent,
    DoughnutChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LoginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
