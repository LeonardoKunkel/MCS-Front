import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PrecionPageRoutingModule } from './precion-routing.module';
import { PrecionPage } from './precion.page';
import { ChartsModule  } from 'ng2-charts'

import { PresionModelPage } from '../presion-model/presion-model.page'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrecionPageRoutingModule,
    ChartsModule
  ],
  declarations: [
    PrecionPage,
    PresionModelPage
  ],
  entryComponents:[
    PresionModelPage
  ]
})
export class PrecionPageModule {}
