import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:DailyReportComponent
  // },
  // {
  //   path:'http',
  //   component:HttpClientComponent
  //   // component:ProductComponent
  // },
  {
    path:'',
    loadChildren: () => import('./product/product.module').then(product => product.ProductModule)
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
