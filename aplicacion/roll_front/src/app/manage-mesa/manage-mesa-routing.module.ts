import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageMesaPage } from './manage-mesa.page';

const routes: Routes = [
  {
    path: '',
    component: ManageMesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageMesaPageRoutingModule {}
