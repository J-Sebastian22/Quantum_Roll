import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-game-master',
  templateUrl: './game-master.page.html',
  styleUrls: ['./game-master.page.scss'],
})
export class GameMasterPage implements OnInit {

  mesas: any[] = [];

  constructor(
    private navCtrl: NavController,
    private mesaService: MesaService,
  ) { }

  ngOnInit() {
    this.loadMesas();
  }

  loadMesas() {
    this.mesaService.getMesas().subscribe({
      next: (response) => {
        this.mesas = response; // Almacena la respuesta en la variable mesas
      },
      error: (error) => {
        console.error('Error al obtener mesas:', error);
      }
    });
  }


  goToNew_Mesa() {
    this.navCtrl.navigateForward('/game-master/new-mesa');
  }

  goToManage_Mesa(mesaId: number) {
    this.navCtrl.navigateForward(`/game-master/manage-mesa/${mesaId}`);
  }

}
