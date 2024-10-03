import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyPjPageRoutingModule } from './modify-pj-routing.module';

import { ModifyPjPage } from './modify-pj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyPjPageRoutingModule
  ],
  declarations: [ModifyPjPage]
})
export class ModifyPjPageModule {}
