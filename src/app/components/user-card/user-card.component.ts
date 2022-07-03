import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { IUser } from 'src/app/models/iuser';
import { ModalService } from 'src/app/shared/modal.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  ngOnInit(): void {}
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
