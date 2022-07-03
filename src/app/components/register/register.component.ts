import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: string = '';
  lname: string = '';
  email: string = '';
  password: string = '';
  empty: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigate(['']);
  }

  setFirstName(fname: string) {
    this.fname = fname;
  }
  setLastName(lname: string) {
    this.lname = lname;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  ifSignUpPressed() {
    if (this.fname != '' && this.lname != '' && this.email != '' && this.password != '') {
      this.empty = false;
    }
    else this.empty = true;
  }

}
