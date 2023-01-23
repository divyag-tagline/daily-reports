import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { HttpClientComponent } from './http-client/http-client.component';

const routes: Routes = [
  {
    path:'',
    component:DailyReportComponent
  },
  {
    path:'http',
    component:HttpClientComponent
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
