import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FluxesComponent } from './fluxes/fluxes.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';

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
        path: 'login',
        component: LoginComponent,
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
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
