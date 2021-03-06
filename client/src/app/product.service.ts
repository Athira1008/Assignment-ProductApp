import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { ProductModel } from './product-list/product.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: ProductModel[];
  constructor( private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
  newProduct(item)
  {
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=>{
      console.log(data)
    });
  }

deleteProduct(id)
  {
    return this.http.get("http://localhost:3000/delete/"+id);
    
  }

editProduct(id)
  {
    return this.http.get("http://localhost:3000/edit/"+id);
    
  }
  updateProduct(item)
  {
    return this.http.post("http://localhost:3000/update",{"product":item})
    .subscribe(data=>{
      console.log(data)
    });
  }
}
