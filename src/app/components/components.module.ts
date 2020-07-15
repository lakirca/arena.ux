import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardModule} from './card/card.module';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlertComponent } from './alert/alert.component';
import { UsermenuComponent } from './usermenu/usermenu.component';

@NgModule({
  declarations: [SidebarComponent, AlertComponent, HeaderComponent, UsermenuComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    NgbModule,
    CardModule
  ],
  exports: [SidebarComponent, AlertComponent, HeaderComponent, UsermenuComponent, LayoutComponent, CardModule]
})
export class ComponentsModule { }
