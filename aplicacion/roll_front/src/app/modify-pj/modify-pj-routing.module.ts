import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyPjPage } from './modify-pj.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyPjPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyPjPageRoutingModule {}
