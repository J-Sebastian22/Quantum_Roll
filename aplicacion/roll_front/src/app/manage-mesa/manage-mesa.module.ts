import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageMesaPageRoutingModule } from './manage-mesa-routing.module';

import { ManageMesaPage } from './manage-mesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageMesaPageRoutingModule
  ],
  declarations: [ManageMesaPage]
})
export class ManageMesaPageModule {}
