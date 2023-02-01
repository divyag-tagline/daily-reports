import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyReportComponent } from './features/daily-reports/component/daily-report/daily-report.component';
import { HttpClientComponent } from './features/http/component/http-client/http-client.component';

const routes: Routes = [
  {
    path: 'report',
    // component: DailyReportComponent,
    loadChildren: () =>
      import('./features/daily-reports/daily-reports.module').then(
        (report) => report.DailyReportsModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'http',
    loadChildren: () =>
      import('./features/http/http.module').then((http) => http.HttpModule),
  },
  {
    path: '**',
    redirectTo: 'report',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
