import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface Details {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products!: Product[];
  imageId!: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    this.displayProduct();
  }

  displayProduct() {
    this.productService.displyProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(data);
    });
  }

  displayImage(id: number) {}
}
