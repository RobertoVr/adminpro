import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const pagesRoutes : Routes = [
    {
      path: '', 
      component: PagesComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
        { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
        { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Graficas' } },
        { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de temas' } },
        { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' } },
        { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
        { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
      ]
    }
] 

@NgModule({
  imports: [
    RouterModule.forChild( pagesRoutes )
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutesModule {}
