import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonajeFormPage } from './personaje-form.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajeFormPageRoutingModule {}
