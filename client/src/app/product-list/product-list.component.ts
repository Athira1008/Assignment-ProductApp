import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductService]
})
export class ProductListComponent implements OnInit  {
  // constructor() { }
  title:String = "Product List";
  products: ProductModel[];
  imageWidth: number= 50;
  imageMargin: number= 2;
  showImage: boolean = false;
  constructor(private productService: ProductService){

  }
  toggleImage():void{
    this.showImage= !this.showImage;
  }
  
  // delProduct(id:string)
  // { 
  //   var products=this.products;
  //   this.productService.deleteProduct(id)
  //   .subscribe(data=>{
  //     if(data.n==1){
  //       for(var i=0;i<products.length;i++){
  //         if(products[i]._id==id){
  //           products.splice(i,1);
  //         }
  //       }
  //     }
  //   });
  // }

  ngOnInit(): void {
    
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
    this.refreshProducts();
  }



refreshProducts(){
  this.productService.getProducts().subscribe((res)=>{
    this.products= res as ProductModel[];;
  });
}
onDelete(_id:string)
{
   if(confirm('Are you sure to delete this record?')==true){
     this.productService.deleteProduct(_id)
    //  .subscribe((data)=>{
      console.log("called");
//    alert("Success");
      this.refreshProducts();
    //  });
   }
  }

// {
//   this.productService.deleteProduct(id);
//   console.log("called");
//   alert("Success");
  
// }
// }

}
