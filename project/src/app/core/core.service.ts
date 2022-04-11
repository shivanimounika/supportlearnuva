import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoreService {
  products:Array<object> = [];
  constructor(
    private httpCilent : HttpClient
  ) { }
  // productsByCategory(category):Observable<any>{
  //   return this.httpCilent.get(`${environment.apiUrl}v1/products/category?category=${category}`);
  // }
  set addOrRetriveProducts(product){
    this.products.push(product);
  }
  get addOrRetriveProducts():Array<object>{
    return this.products;
  }
}
