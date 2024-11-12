import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharacterService } from '../services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-personaje-form',
  templateUrl: './personaje-form.page.html',
  styleUrls: ['./personaje-form.page.scss'],
})
export class PersonajeFormPage implements OnInit {
  characterForm: FormGroup;
  characterId: string | null = null;
  mesaId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private storage: Storage,
    private navCtrl: NavController,
  ) { 
    this.characterForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(1)]],
      altura: [null, Validators.required],
      apodo: [''],
      bloqueo: [null, Validators.required],
      esquivar: [null, Validators.required],
      ataque: [null, Validators.required],
    });
  }

  async ngOnInit() {
    await this.storage['create']();
    this.characterId = this.route.snapshot.paramMap.get('characterId');
    this.mesaId = await this.storage['get']('mesaId');
  }

  goToJugador(){
    this.navCtrl.navigateForward('/jugador')
  }

  submitForm() {
    if (this.characterForm.valid && this.characterId && this.mesaId) {
      // Añadir mesaId a los datos de characterData
      const characterData = { ...this.characterForm.value, mesa: this.mesaId };
      console.log('Character Data con mesaId:', characterData);
  
      // Realizar la solicitud para actualizar el personaje
      this.characterService.updateCharacter(this.characterId, characterData).subscribe(
        response => {
          console.log('Personaje actualizado exitosamente:', response);
        },
        error => {  
          console.error('Error al actualizar el personaje:', error);
        }
      );
    } else {
      console.log(`Formulario inválido o ID no disponible. CharacterId: ${this.characterId}, MesaId: ${this.mesaId}`);
    }
  }

}
