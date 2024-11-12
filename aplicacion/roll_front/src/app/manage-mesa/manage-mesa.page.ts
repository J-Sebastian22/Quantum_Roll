import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-manage-mesa',
  templateUrl: './manage-mesa.page.html',
  styleUrls: ['./manage-mesa.page.scss'],
})
export class ManageMesaPage implements OnInit {
  mesaId!: number;
  mesa: any = {};
  personajes: any[] = [];

  customActionSheetOptions = {
    header: 'Tematica',
    subHeader: 'Selecciona la tematica',
  };

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private mesaService: MesaService,
  ) { 
    this.route.paramMap.subscribe(params => {
      this.mesaId = +(params.get('mesaId') ?? 0);
      this.loadMesaDetails(this.mesaId);
  })}

  ngOnInit() {
    // Obtiene el ID de la mesa desde los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      this.mesaId = +(params.get('mesaId') ?? 0);
      if (this.mesaId) {
        this.loadMesaDetails(this.mesaId);
      }
    });

    console.log('ID de la mesa:', this.mesaId);

    this.obtenerPersonajes();
  }

  goToModify_pj() {
    this.navCtrl.navigateForward('/game-master/modify-pj');
  }

  goToGame_Master() {
    this.navCtrl.navigateForward('/game-master');
  }

  loadMesaDetails(mesaId: number) {
    this.mesaService.getMesaById(mesaId).subscribe(
      (data) => {
        this.mesa = data;
        console.log("Dtos mesa:",this.mesa)
      },
      (error) => {
        console.error('Error al cargar los detalles de la mesa:', error);
      }
    );
  }

  
  crearPersonajeBasico() {
    // Verificar que el ID de la mesa está definido antes de intentar crear el personaje
    const mesaId = this.mesa.id;
    if (mesaId) {
      this.mesaService.crearPersonajeBasico(mesaId).subscribe(
        (data) => {
          console.log('Personaje creado:', data);
          this.personajes.push(data);  // Agrega el personaje creado a la lista
        },
        (error) => {
          console.error('Error al crear personaje:', error);
        }
      );
    } else {
      console.error('ID de la mesa no está definido');
    }
  }

  obtenerPersonajes() {
    this.mesaService.getPersonajes(this.mesaId).subscribe(
      (data) => {
        this.personajes = data;  // Guardar los personajes en la propiedad
        console.log('datos:',this.personajes);
      },
      (error) => {
        console.error('Error al obtener los personajes:', error);
      }
    );
  }
}
