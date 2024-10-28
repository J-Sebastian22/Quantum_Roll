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
  mesa: any;

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
      },
      (error) => {
        console.error('Error al cargar los detalles de la mesa:', error);
      }
    );
  }
}
