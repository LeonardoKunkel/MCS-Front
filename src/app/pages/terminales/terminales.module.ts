import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminalesPageRoutingModule } from './terminales-routing.module';

import { TerminalesPage } from './terminales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminalesPageRoutingModule
  ],
  declarations: [TerminalesPage]
})
export class TerminalesPageModule {}
