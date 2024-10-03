import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modify-pj',
  templateUrl: './modify-pj.page.html',
  styleUrls: ['./modify-pj.page.scss'],
})
export class ModifyPjPage implements OnInit {

  habilidades = {
    fuerza: 10, // Valor inicial de la habilidad
    destreza: 5  // Valor inicial de la habilidad
  };

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goToManage_Mesa() {
    this.navCtrl.navigateBack('/game-master/manage-mesa');
  }

}
