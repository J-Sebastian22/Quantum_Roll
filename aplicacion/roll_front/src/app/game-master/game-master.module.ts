import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameMasterPageRoutingModule } from './game-master-routing.module';

import { GameMasterPage } from './game-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameMasterPageRoutingModule
  ],
  declarations: [GameMasterPage]
})
export class GameMasterPageModule {}
