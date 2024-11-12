import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { CharacterIdModalComponent } from '../components/character-id-modal/character-id-modal.component';
@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.page.html',
  styleUrls: ['./jugador.page.scss'],
})
export class JugadorPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  goToNew_Personaje() {
    this.navCtrl.navigateForward('');
  }

  goToPersonaje() {
    this.navCtrl.navigateForward(``);
  }

  async openCharacterIdModal() {
    const modal = await this.modalController.create({
      component: CharacterIdModalComponent,
    });
    await modal.present();
  }

}
