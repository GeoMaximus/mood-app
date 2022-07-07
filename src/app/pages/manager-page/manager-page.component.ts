import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { User } from 'src/app/models/user';
import { empty, Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/modal.service';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from 'src/app/shared/manager.service';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {

  user: User | undefined
  public users: Array<User> = [];
  public photos: Array<any> = [];
  constructor(private modalService: ModalService, private userService: UserService) {}

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  ngOnInit(): void {
     this.userService.getUsers()
    .subscribe((resp) => {
      this.users = resp as Array<User>;
      console.log(resp);
      console.log(this.users);
    });

    this.userService.getPhotos()
    .subscribe((resp) => {
      this.photos = resp as Array<any>;
    })
  }

  openModal() {
    this.sub = this.modalService
      .openModal(this.entry, 'Are you sure ?', 'click confirm or close')
      .subscribe((v) => {
      });
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();

}
}
