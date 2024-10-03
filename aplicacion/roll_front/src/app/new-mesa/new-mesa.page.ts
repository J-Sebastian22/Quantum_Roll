import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-mesa',
  templateUrl: './new-mesa.page.html',
  styleUrls: ['./new-mesa.page.scss'],
})
export class NewMesaPage implements OnInit {


  customActionSheetOptions = {
    header: 'Tematica',
    subHeader: 'Selecciona la tematica',
  };

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goToGame_Master() {
    this.navCtrl.navigateForward('/game-master');
  }
}
