import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-game-master',
  templateUrl: './game-master.page.html',
  styleUrls: ['./game-master.page.scss'],
})
export class GameMasterPage implements OnInit {

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }


  goToNew_Mesa() {
    this.navCtrl.navigateForward('/game-master/new-mesa');
  }

  goToManage_Mesa () {
    this.navCtrl.navigateForward('/game-master/manage-mesa');
  }

}
