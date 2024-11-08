import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modify-pj',
  templateUrl: './modify-pj.page.html',
  styleUrls: ['./modify-pj.page.scss'],
})
export class ModifyPjPage implements OnInit {

  nombreItem: string = '';
  imagenItemUrl: string = '/assets/images/wooden_sword.png'; // Imagen por defecto o vacío
  estadisticaItem: number | null = null;

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
