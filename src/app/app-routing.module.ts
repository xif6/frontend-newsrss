import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FluxesComponent } from './fluxes/fluxes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fluxes',
        component: FluxesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
