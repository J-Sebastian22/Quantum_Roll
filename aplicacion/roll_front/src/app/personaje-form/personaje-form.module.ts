import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajeFormPageRoutingModule } from './personaje-form-routing.module';

import { PersonajeFormPage } from './personaje-form.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PersonajeFormPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [PersonajeFormPage]
})
export class PersonajeFormPageModule {}
