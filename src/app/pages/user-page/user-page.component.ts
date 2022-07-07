import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
 
  user:User = new User();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
    .subscribe((resp) => {
      this.user = resp as User;})
    // this.user.name = 'John';
  }

}
