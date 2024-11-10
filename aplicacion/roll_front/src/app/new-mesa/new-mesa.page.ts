import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-new-mesa',
  templateUrl: './new-mesa.page.html',
  styleUrls: ['./new-mesa.page.scss'],
})
export class NewMesaPage implements OnInit {

  mesaNombre: string = '';
  mesaTema: string = '';
  mesaDescripcion: string = '';

  customActionSheetOptions = {
    header: 'Tematica',
    subHeader: 'Selecciona la tematica',
  };

  constructor(
    private navCtrl: NavController, private mesaService: MesaService
  ) { }

  ngOnInit() {
  }

  goToGame_Master() {
    this.navCtrl.navigateBack('/game-master');

  }

  createMesa() {
    const nuevaMesa = {
      nombre: this.mesaNombre,
      tematica: this.mesaTema,
      descripcion: 'none'
    };

    this.mesaService.createMesa(nuevaMesa).subscribe({
      next: (response) => {
        console.log('Mesa creada:', response);
        this.navCtrl.navigateBack('/game-master');
        // Redireccionar o limpiar el formulario si es necesario
      },
      error: (error) => {
        console.error('Error al crear la mesa:', error);
      }
    });
    
  }

  createMesaRol() {
    const nuevaMesa = {
      nombre: this.mesaNombre,
      tematica: this.mesaTema,
      descripcion: this.mesaDescripcion || 'none',
    };

    this.mesaService.createMesaRol(nuevaMesa).subscribe({
      next: (response) => {
        console.log('Mesa creada:', response);
        this.navCtrl.navigateBack('/game-master'); // Redireccionar a la página de "game-master"
      },
      error: (error) => {
        console.error('Error al crear la mesa:', error);
      },
    });
  }

  agregarPersonaje() {

  }
}
