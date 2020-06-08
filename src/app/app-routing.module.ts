import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'documentos',
    loadChildren: () => import('./pages/documentos/documentos.module').then(m => m.DocumentosPageModule)
  },
  {
    path: 'calibracion',
    loadChildren: () => import('./pages/calibracion/calibracion.module').then(m => m.CalibracionPageModule)
  },
  {
    path: 'personal',
    loadChildren: () => import('./pages/personal/personal.module').then( m => m.PersonalPageModule)
  },
  {
    path: 'equipos',
    loadChildren: () => import('./pages/equipos/equipos.module').then( m => m.EquiposPageModule)
  },
  {
    path: 'flujo',
    loadChildren: () => import('./pages/flujo/flujo.module').then( m => m.FlujoPageModule)
  },
  {
    path: 'temperatura',
    loadChildren: () => import('./pages/temperatura/temperatura.module').then( m => m.TemperaturaPageModule)
  },
  {
    path: 'terminales',
    loadChildren: () => import('./pages/terminales/terminales.module').then( m => m.TerminalesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
