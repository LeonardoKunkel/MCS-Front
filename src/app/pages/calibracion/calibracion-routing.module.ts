import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalibracionPage } from './calibracion.page';

const routes: Routes = [
  {
    path: '',
    component: CalibracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalibracionPageRoutingModule {}
