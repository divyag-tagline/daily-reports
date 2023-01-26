import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ImageComponent } from './image/image.component';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
