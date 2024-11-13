import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController, ModalController } from '@ionic/angular';
import { MesaService } from '../services/mesa.service';

@Component({
  selector: 'app-modify-pj',
  templateUrl: './modify-pj.page.html',
  styleUrls: ['./modify-pj.page.scss'],
})
export class ModifyPjPage implements OnInit {

  nombreItem: string = '';
  imagenItemUrl: string = '/assets/images/wooden_sword.png'; // Imagen por defecto o vacío
  estadisticaItem: number | null = null;

  

  habilidades: any[] = [
    {
      id: 1,
      nombre: 'Golpe Poderoso',
      descripcion: 'Realiza un golpe con gran daño a un enemigo.',
      nivel: 3,
    },
    {
      id: 2,
      nombre: 'Escudo Mágico',
      descripcion: 'Genera un escudo que reduce el daño recibido durante un tiempo.',
      nivel: 2,
    },
    {
      id: 3,
      nombre: 'Curación',
      descripcion: 'Recupera una porción de la salud perdida.',
      nivel: 4,
    },
  ];

  grupo1 = [
    { nombre: 'Fuerza', sumarAlDado: -1 },
    { nombre: 'Destreza', sumarAlDado: 1 },
    { nombre: 'Constitución', sumarAlDado: 1 },
    { nombre: 'Inteligencia', sumarAlDado: 1 },
    { nombre: 'Sabiduría', sumarAlDado: 1 },
    { nombre: 'Apariencia', sumarAlDado: 1 },
  ];

  grupo2 = [
    { nombre: 'Estamina', sumarAlDado: 0 },
    { nombre: 'Balance', sumarAlDado: 1 },
    { nombre: 'Resistencia', sumarAlDado: 1 },
    { nombre: 'Conocimiento', sumarAlDado: 1 },
    { nombre: 'F. Voluntad', sumarAlDado: 4 },
    { nombre: 'Carisma', sumarAlDado: 1 },
  ];

  grupo3 = [
    { nombre: 'Musculatura', sumarAlDado: 0 },
    { nombre: 'Puntería', sumarAlDado: 1 },
    { nombre: 'Salud', sumarAlDado: 1 },
    { nombre: 'Lógica', sumarAlDado: 1 },
    { nombre: 'Intuición', sumarAlDado: 1 },
    { nombre: 'Verborrea', sumarAlDado: 1 },
  ];

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  
  
  constructor(
    private navCtrl: NavController,
    private mesaService: MesaService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  goToManage_Mesa() {
    this.navCtrl.navigateBack('/game-master/manage-mesa/${mesaId}');
  }

  dismiss() {
    this.modalController.dismiss();
  }


  async cargarImagen() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl, // Usamos DataUrl para obtener la imagen como base64
        source: CameraSource.Photos, // Abrir la galería de fotos
      });

      // Asigna la imagen seleccionada como URL base64
      this.imagenItemUrl = image.dataUrl!;
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  }
}
