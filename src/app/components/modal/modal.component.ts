import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy, OnChanges {

  @Input() isModalOpen = false;
  @Output() toggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  closeModal() {
    this.toggleModal.emit(false);
  }
  ngOnChanges(changes: SimpleChanges): void {

    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
