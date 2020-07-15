import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() status = 'primary';
  @Input() closable: boolean;
  @Output() dismiss = new EventEmitter<any>();

  visible = true;

  constructor() { }

  ngOnInit() {
    this.closable = isDefined(this.closable);
  }

  onClose() {
    this.visible = false;
    this.dismiss.emit();
  }
}
