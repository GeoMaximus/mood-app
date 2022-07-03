import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IUser } from 'src/app/models/iuser';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/modal.service';
@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  ngOnInit(): void {}
  openModal() {
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
