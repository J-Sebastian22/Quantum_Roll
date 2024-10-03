import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMesaPage } from './new-mesa.page';

const routes: Routes = [
  {
    path: '',
    component: NewMesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMesaPageRoutingModule {}
