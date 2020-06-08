import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calibracion',
  templateUrl: './calibracion.page.html',
  styleUrls: ['./calibracion.page.scss'],
})
export class CalibracionPage implements OnInit {

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  irFlujo() {
    this.navCtrl.navigateForward('flujo');
  }

  irTempe() {
    this.navCtrl.navigateForward('temperatura');
  }

  irPresion() {
    this.navCtrl.navigateForward('flujo');
  }

  irDimen() {
    this.navCtrl.navigateForward('temperatura');
  }
}
