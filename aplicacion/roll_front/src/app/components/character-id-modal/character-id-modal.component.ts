import { Component, OnInit } from '@angular/core';
import { ModalController, IonicModule, NavController } from '@ionic/angular';
import { CharacterService } from 'src/app/services/character.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-character-id-modal',
  templateUrl: './character-id-modal.component.html',
  styleUrls: ['./character-id-modal.component.scss'],
})
export class CharacterIdModalComponent  implements OnInit {

  characterId: string = '';

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private modalController: ModalController,
    private characterService: CharacterService
  ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async checkCharacterId() {
    this.characterService.verifyCharacterId(this.characterId).subscribe((response) => {
      if (response && response.id) { // Verifica si el personaje existe usando el campo id
        this.storage.set('characterId', this.characterId);
        this.dismiss();
        this.storage.set('mesaId', response.mesa);  // Guarda el campo mesa como mesaId en el Storage
        this.navCtrl.navigateForward(`jugador/personaje-form/${this.characterId}`);
        console.log(`${response.mesa}`)
      } else {
        alert('ID no válido. Intenta con otro.');
      }
    });
  }
  
}
