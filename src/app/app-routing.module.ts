import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('./pages/temp3/temp3.module').then( m => m.Temp3PageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/temp1/temp1.module').then( m => m.Temp1PageModule)
  },
  {
    path: 'HR/IT',
    loadChildren: () => import('./pages/temp2/temp2.module').then( m => m.Temp2PageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./pages/temp3/temp3.module').then( m => m.Temp3PageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
