import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent} from './inici';
import { EspervidaComponent } from './espervida/espervida';
import { FertilitatComponent } from './fertilitat/fertilitat';
import { PobresaComponent } from './pobresa/pobresa';
import { PrincipalComponent } from './paginici/principal';
import {Router} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'espervida', component: EspervidaComponent },
  { path: 'fertilitat', component: FertilitatComponent },
  { path: 'pobresa', component: PobresaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
