import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-update-product-list',
  templateUrl: './update-product-list.component.html',
  styleUrls: ['./update-product-list.component.css']
})
export class UpdateProductListComponent implements OnInit {
   title:String = "Edit Product";
   p_id="";
  constructor(private _route:ActivatedRoute,private productService: ProductService,private router:Router) { }
  productItem=new ProductModel(null,null,null,null,null,null,null,null,null);
  
  ngOnInit(): void {
    this._route.params.subscribe(params=>{
    this.p_id=params['p_id'];
    });
    this.productService.editProduct(this.p_id).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
    });
  }
  UpdateProduct(){
    this.productService.updateProduct(this.productItem);
    alert("success");
    this.router.navigate(['/']);
  }
}
