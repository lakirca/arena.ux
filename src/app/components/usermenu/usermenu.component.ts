import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.scss'],
})
export class UsermenuComponent implements OnInit {
  user: any;

  constructor(
    private popoverController: PopoverController,
  ) { }

  ngOnInit() {
  }

  openWindow(url) {
    window.open(url, '_blank');
  }
}
