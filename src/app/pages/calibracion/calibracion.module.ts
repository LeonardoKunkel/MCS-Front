import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalibracionPageRoutingModule } from './calibracion-routing.module';

import { CalibracionPage } from './calibracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalibracionPageRoutingModule
  ],
  declarations: [CalibracionPage]
})
export class CalibracionPageModule {}
