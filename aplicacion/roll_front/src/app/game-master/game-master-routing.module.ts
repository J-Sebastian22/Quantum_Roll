import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameMasterPage } from './game-master.page';

const routes: Routes = [
  {
    path: '',
    component: GameMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameMasterPageRoutingModule {}
