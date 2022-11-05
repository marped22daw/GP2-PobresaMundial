import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent} from './inici';
import { EspervidaComponent } from './espervida';
import { FertilitatComponent } from './fertilitat';
import { PobresaComponent } from './pobresa';
import { PrincipalComponent } from './principal';
import {Router} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/inici', pathMatch: 'full' },
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
