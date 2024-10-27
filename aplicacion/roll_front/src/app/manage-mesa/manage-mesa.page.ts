import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-mesa',
  templateUrl: './manage-mesa.page.html',
  styleUrls: ['./manage-mesa.page.scss'],
})
export class ManageMesaPage implements OnInit {
  mesaId!: number;

  customActionSheetOptions = {
    header: 'Tematica',
    subHeader: 'Selecciona la tematica',
  };

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.mesaId = Number(this.route.snapshot.paramMap.get('id'));
  }

  goToModify_pj() {
    this.navCtrl.navigateForward('/game-master/modify-pj');
  }

  goToGame_Master() {
    this.navCtrl.navigateForward('/game-master');
  }
}
