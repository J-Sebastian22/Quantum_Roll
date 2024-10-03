import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-manage-mesa',
  templateUrl: './manage-mesa.page.html',
  styleUrls: ['./manage-mesa.page.scss'],
})
export class ManageMesaPage implements OnInit {

  customActionSheetOptions = {
    header: 'Tematica',
    subHeader: 'Selecciona la tematica',
  };

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goToModify_pj() {
    this.navCtrl.navigateForward('/game-master/modify-pj');
  }

  goToGame_Master() {
    this.navCtrl.navigateForward('/game-master');
  }
}
