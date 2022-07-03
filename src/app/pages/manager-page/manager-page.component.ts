import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/iuser';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {
  isModalOpen = false;
  seletedUser: IUser | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(modalState: boolean) {
    this.isModalOpen = modalState;
  }

  selectEmployee(selectedUser: IUser) {
    this.seletedUser = selectedUser;
    this.toggleModal(true);
  }

}
