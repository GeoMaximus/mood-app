import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ManagerPageComponent } from './pages/manager-page/manager-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent},
  { path: 'user', component: UserPageComponent},
  { path: 'manager', component: ManagerPageComponent},
  { path: '**', component: NotfoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
