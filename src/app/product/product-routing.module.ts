import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent
  },
  {
    path:':imageId',
    component:ImageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
