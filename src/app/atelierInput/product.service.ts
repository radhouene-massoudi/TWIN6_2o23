import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url=environment.baseUrl+'Product/'
  constructor(private http:HttpClient) { }

  fetchProduct(){
    return this.http.get(this.url);
  }
  updateProduct(d:any, id:any){
    return this.http.put(this.url+id,d);
  }
}
