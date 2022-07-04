import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: User = new User();
  // email: string = '';
  // password: string = '';
  empty:boolean=false;
  

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnDestroy() {
  }

  ngOnInit(): void {
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  setEmail(email:string){
    // this.email=email;
    this.user.email=email;
  }

  setPassword(password:string){
    // this.password=password;
    this.user.password=password;
  }

  ifSignInPressed(){
    if(this.user.email!='' && this.user.password!=''){
      this.empty=false;
      this.loginService.login(this.user).subscribe(()=>{
        alert("successfully logged in");
      },error=>alert("somethings wrong"))
      console.log(this.user)
    }
    else{
      this.empty=true;
    } 
  }

}
