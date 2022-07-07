import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/models/manager';
import { User } from 'src/app/models/user';
import { RegisterService } from 'src/app/shared/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User = new User();
  managers: Manager[] = [];
  // fname: string = '';
  // lname: string = '';
  // email: string = '';
  // password: string = '';
  empty: boolean = false;


  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.managers.push(new Manager(1, 'Manager1', 'admin'));
    this.managers.push(new Manager(2, 'Manager2', 'user'));
    this.managers.push(new Manager(3, 'Manager3', 'guest'));
    this.managers.push(new Manager(4, 'Manager4', 'admin'));
    console.log(this.managers);
  }

  goToLogin() {
    this.router.navigate(['']);
  }

  setFirstName(fname: string) {
    // this.fname = fname;
    this.user.name = fname;
  }
  setLastName(lname: string) {
    // this.lname = lname;
    this.user.name = lname;
  }

  setEmail(email: string) {
    // this.email = email;
    this.user.email = email;
  }

  setPassword(password: string) {
    // this.password = password;
    this.user.password = password;
  }

  //set manager from register form!!!!!
  setManager(manager: Manager) {
    this.user.managerId = (this.managers.indexOf(manager)) + 1;
  }

  ifSignUpPressed() {
    if (this.user.name != '' && this.user.name != '' && this.user.email != '' && this.user.password != '') {
      this.registerService.register(this.user).subscribe(date => {alert("success sign up")}, error => alert("somethings wrong"));
      console.log(this.user);
      this.empty = false;
    }
    else this.empty = true;

  }

}
