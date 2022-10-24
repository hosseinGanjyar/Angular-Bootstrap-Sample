import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'panel',
    loadChildren: () => import('../modules/panel/panel.module')
      .then(m => m.PanelModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('../modules/auth/auth.module')
      .then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'panel', pathMatch: 'full' },
  { path: '**', redirectTo: 'panel' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
