import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardContentComponent } from './card-content/card-content.component';

@NgModule({
  declarations: [CardComponent, CardHeaderComponent, CardContentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CardComponent, CardHeaderComponent, CardContentComponent],
})
export class CardModule { }
