import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDetailsResolver } from './all-details.resolver';
import { HttpClientComponent } from './http-client/http-client.component';

const routes: Routes = [
  {
    path: '',
    component: HttpClientComponent,
    resolve: { allDetails: AllDetailsResolver },
  },
  // {
  //   path:'http/:id',
  //   component:HttpClientComponent
  // },
  {
    path: '**',
    redirectTo: 'http',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpRoutingModule {}
