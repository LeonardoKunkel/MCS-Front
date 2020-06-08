import { IonSlides, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-flujo',
  templateUrl: './flujo.page.html',
  styleUrls: ['./flujo.page.scss'],
})
export class FlujoPage implements OnInit {

  selectedSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  };

  datos: any = {
    CATI: '',
    CAHI: '',
    CAPI: '',
    CATF: '',
    CAHF: '',
    CAPF: '',
    D1: '',
    D2: '',
    D3: '',
    D4: '',
    D5: '',
    D6: '',
    D7: '',
    D8: '',
    D9: '',
    D10: '',
    D11: '',
    D12: '',
    D13: '',
    D14: '',
    D15: '',
    D16: '',
    D17: '',
    D18: '',
    D19: '',
    D20: '',
    D21: '',
    D22: '',
    D23: '',
    D24: '',
    D25: '',
    D26: '',
    D27: '',
    D28: '',
    D29: '',
    D30: '',
    FCP1: '',
    FCP2: '',
    FCP3: '',
    FCP4: '',
    FCP5: '',
    VC1: '',
    VC2: '',
    VC3: '',
    VC4: '',
    VC5: '',
    FCM1: '',
    FCM2: '',
    FCM3: '',
    FCM4: '',
    FCM5: '',
  };

  constructor( public toast: ToastController ) { }

  ngOnInit() {
  }

  async segmentChanged(ev) {
    await this.selectedSlide.slideTo(this.segment);
  }

  async slideChanged(slides: IonSlides) {
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    });
  }

  async enviarResul(resultados){
    console.log(this.datos);
    const toast = await this.toast.create({
      message: 'Resultados guardados',
      duration: 2000
    });
    toast.present();

    const volindicado1 = this.datos.D11 - this.datos.D16 * this.datos.FCP1;
    this.datos.VC1 = volindicado1;
  }
}
