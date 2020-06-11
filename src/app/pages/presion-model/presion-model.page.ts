import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-presion-model',
  templateUrl: './presion-model.page.html',
  styleUrls: ['./presion-model.page.scss'],
})
export class PresionModelPage implements OnInit {

  selectedSlide: any;
  segment = 0;
  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400
  };

  constructor(
    private modalCtrl: ModalController,
    public toast: ToastController
  ) { }

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

  close(){
    return this.modalCtrl.dismiss();
  }

}
