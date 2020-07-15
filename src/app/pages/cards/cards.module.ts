import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsPageRoutingModule } from './cards-routing.module';

import { CardsPage } from './cards.page';

import { ComponentsModule } from 'src/app/components/components.module';
import { ArenaUXModule } from '@arenaops/arena.ux-core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArenaUXModule,
    ComponentsModule,
    CardsPageRoutingModule
  ],
  declarations: [CardsPage]
})
export class CardsPageModule {}
