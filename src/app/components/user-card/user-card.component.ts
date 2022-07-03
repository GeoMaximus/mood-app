import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser | undefined;
  @Output() userClicked: EventEmitter<IUser> = new EventEmitter<IUser>();
  constructor() { }

  ngOnInit(): void {
  }

  viewUser() {
    this.userClicked.emit(this.user);
  }

}
