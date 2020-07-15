import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertsPageRoutingModule } from './alerts-routing.module';

import { AlertsPage } from './alerts.page';

import { ArenaUXModule } from '@arenaops/arena.ux-core';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArenaUXModule,
    AlertsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AlertsPage]
})
export class AlertsPageModule {}
