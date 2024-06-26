import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent} from './inici';
import { EspervidaComponent } from './espervida/espervida';
import { FertilitatComponent } from './fertilitat/fertilitat';
import { PobresaComponent } from './pobresa/pobresa';
import { PrincipalComponent } from './paginici/principal';
import {Router} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: PrincipalComponent },
  { path: 'vida', component: EspervidaComponent },
  { path: 'fertilidad', component: FertilitatComponent },
  { path: 'poblacion', component: PobresaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
