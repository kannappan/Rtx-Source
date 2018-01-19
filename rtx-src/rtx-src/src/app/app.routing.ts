import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

import { AuthGuard } from './shared/auth.guard'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SimpleLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      },
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    //canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [

      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers :[AuthGuard]
})
export class AppRoutingModule {}
