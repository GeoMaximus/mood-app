import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
 
  user:User = new User();
  constructor() { }

  ngOnInit(): void {
    this.user.firstName = 'John';
  }

}
