import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresionModelPage } from './presion-model.page';

const routes: Routes = [
  {
    path: '',
    component: PresionModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresionModelPageRoutingModule {}
