import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-game-master',
  templateUrl: './game-master.page.html',
  styleUrls: ['./game-master.page.scss'],
})
export class GameMasterPage implements OnInit {

  allMesas: any[] = [];  // Lista de todas las mesas
  mesasGamemaster: any[] = [];  // Lista de mesas donde el usuario es Gamemaster

  constructor(
    private navCtrl: NavController,
    private mesaService: MesaService,
  ) { }

  ngOnInit() {
    this.loadMesas();  // Carga todas las mesas
    this.loadMesasGamemaster();  // Carga las mesas donde el usuario es Gamemaster
  }

  ionViewWillEnter() {
    this.loadMesas();
    this.loadMesasGamemaster();
  }

  // Método para cargar todas las mesas
  loadMesas() {
    this.mesaService.getMesas().subscribe({
      next: (response) => {
        this.allMesas = response; // Almacena la respuesta en la variable allMesas
      },
      error: (error) => {
        console.error('Error al obtener todas las mesas:', error);
      }
    });
  }

  // Método para cargar mesas donde el usuario tiene el rol de Gamemaster
  loadMesasGamemaster() {
    
    const userId = +localStorage.getItem('userId')!; // Obtiene el ID de usuario
    this.mesaService.getMesasGamemaster(userId).subscribe({
      next: (data) => {
        this.mesasGamemaster = data;
        console.log("Mesas del Gamemaster:", this.mesasGamemaster); // Verifica los datos
      },
      error: (error) => {
        console.error('Error al obtener mesas del Gamemaster:', error);
      }
    });
  }

  // Navega a la página para crear una nueva mesa
  goToNew_Mesa() {
    this.navCtrl.navigateForward('/game-master/new-mesa');
  }

  // Navega a la página para gestionar una mesa específica
  goToManage_Mesa(mesaId: number) {
    this.navCtrl.navigateForward(`/game-master/manage-mesa/${mesaId}`);
  }

}
