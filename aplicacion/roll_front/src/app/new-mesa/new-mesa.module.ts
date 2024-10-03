import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMesaPageRoutingModule } from './new-mesa-routing.module';

import { NewMesaPage } from './new-mesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMesaPageRoutingModule
  ],
  declarations: [NewMesaPage]
})
export class NewMesaPageModule {}
