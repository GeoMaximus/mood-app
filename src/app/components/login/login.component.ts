import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  empty:boolean=false;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  setEmail(email:string){
    this.email=email;
  }

  setPassword(password:string){
    this.password=password;
  }

  ifSignInPressed(){
    if(this.email!='' && this.password!=''){
      this.empty=false;
    }
    else{
      this.empty=true;
    } 
  }

}
