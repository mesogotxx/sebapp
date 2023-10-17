import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutenticadoGuard } from './guards/autenticado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'restablecercontrasenia',
    loadChildren: () => import('./restablecercontrasenia/restablecercontrasenia.module').then( m => m.RestablecercontraseniaPageModule)
  },
  {
    path: 'rc-validarcorreo',
    loadChildren: () => import('./rc-validarcorreo/rc-validarcorreo.module').then( m => m.RcValidarcorreoPageModule)
  },
  {
    path: 'rc-contranueva',
    loadChildren: () => import('./rc-contranueva/rc-contranueva.module').then( m => m.RcContranuevaPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'perfil/:id',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule),
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'mapita',
    loadChildren: () => import('./mapita/mapita.module').then( m => m.MapitaPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule),
    canActivate: [AutenticadoGuard]
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
