import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "http://demo.sylius.com/api/v1/products/";

  httpOptions = {
    
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer SampleToken'
    })
  };

  constructor(private http: HttpClient) { }

  GetAllProducts() {

    return this.http.get("http://demo.sylius.com/api/v1/products/", this.httpOptions)

  }

}
