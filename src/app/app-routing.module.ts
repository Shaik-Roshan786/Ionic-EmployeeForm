import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './home/home.page';
import { EmployeePage } from './employee/employee.page';

import { UpdatePage } from './update/update.page';
import { GetPage } from './get/get.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    component: EmployeePage,
    loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
  },
  // {
  //   path: 'updatedata',
  //   component: UpdateComponent,
  //   loadChildren: () => import('./update/update.component').then( m => m.UpdateComponent)
  // },
  // {
  //   path: 'update',
  //   // component: UpdatePage,
  //   loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  // },
  {
    path: 'update',
    component: UpdatePage,
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'get',
    component: GetPage,
    loadChildren: () => import('./get/get.module').then( m => m.GetPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
