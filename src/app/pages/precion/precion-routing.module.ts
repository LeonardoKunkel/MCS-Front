import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecionPage } from './precion.page';

const routes: Routes = [
  {
    path: '',
    component: PrecionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrecionPageRoutingModule {}
