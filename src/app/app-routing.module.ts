import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FluxesComponent } from './fluxes/fluxes.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { AddFluxComponent } from './add-flux/add-flux.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fluxes',
        component: FluxesComponent,
        canActivate: [ AuthGuard ],
      },
      {
        path: 'fluxes/add',
        component: AddFluxComponent,
        canActivate: [ AuthGuard ],
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
