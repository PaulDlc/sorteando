import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './components/login/login.module';
import { EventsModule } from './components/events/events.module';
import { InicioComponent } from './components/welcome/inicio/inicio.component';
import { authGuard } from './helpers/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./components/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate: [authGuard]
  },
  {
    path: 'eventos',
    loadChildren: () => import('./components/events/events.module').then(m => m.EventsModule),
    canActivate: [authGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
