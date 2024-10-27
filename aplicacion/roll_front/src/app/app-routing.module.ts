import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'rol',
    loadChildren: () => import('./rol/rol.module').then( m => m.RolPageModule)
  },
  {
    path: 'game-master',
    loadChildren: () => import('./game-master/game-master.module').then( m => m.GameMasterPageModule)
  },
  {
    path: 'game-master/new-mesa',
    loadChildren: () => import('./new-mesa/new-mesa.module').then( m => m.NewMesaPageModule)
  },
  {
    path: 'game-master/manage-mesa',
    loadChildren: () => import('./manage-mesa/manage-mesa.module').then( m => m.ManageMesaPageModule)
  },
  {
    path: 'game-master/modify-pj',
    loadChildren: () => import('./modify-pj/modify-pj.module').then( m => m.ModifyPjPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
