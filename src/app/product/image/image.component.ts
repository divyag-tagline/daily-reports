import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  imageId!: number;
  productsDetails!: Product;
  errorMessage!: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((res) => {
    //   if (res) {
    //     this.productService
    //       .getProductDetail(res['imageId'])
    //       .subscribe((products: Product) => {
    //         if (products) {
    //           this.productsDetails = products;
    //         } else {
    //           this.errorMessage = 'Page not fount';
    //         }
    //       });
    //   }
    // });
    this.productsDetails ? console.log(this.productsDetails.rating) : ''
    
  }
}
