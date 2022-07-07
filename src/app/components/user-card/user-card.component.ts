import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from 'src/app/models/user';
import { ModalService } from 'src/app/shared/modal.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
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
      console.log(this.users);
    });

    this.userService.getPhotos()
    .subscribe((resp) => {
      this.photos = resp as Array<any>;
      this.users.forEach(user => {
        user.thumbnailUrl = this.photos.find(photo => photo.id === user.id).thumbnailUrl;
        user.moodLevel = this.photos.find(photo => photo.id === user.id).id;
      });
    })

  }

  
  createModal() {
    this.sub = this.modalService
      .openModal(this.entry, 'Are you sure ?', 'click confirm or close')
      .subscribe((v) => {
        //your logic
      });
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
