import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Details, Product } from './product.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsDetails!: Product;

  constructor(private http: HttpClient) {}

  // displyProducts():Observable<any> {
  //   return this.http.get(`${environment.apiConfig}`);
  // }

  // getProductDetail(id:string):Observable<any>{
  //   return this.http.get(`${environment.apiConfig}/${id}`);
  // }

  // displayProductsDetails() {
  //   this.displyProducts().subscribe((products: any) => {
  //     this.productsDetails = products.products;
  //   });
  // }

 
}
