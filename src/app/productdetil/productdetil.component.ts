import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Comment, Product, ProductService} from "../share/product.service";

@Component({
  selector: 'app-productdetil',
  templateUrl: './productdetil.component.html',
  styleUrls: ['./productdetil.component.css']
})
export class ProductdetilComponent implements OnInit {

   product: Product;
   comments: Comment[];

  //构造函数 接受传递的参数 ActivatedRoute路由控制 ProductService商品服务类，依赖注入
  constructor(private  routeInfo:ActivatedRoute , private productService: ProductService) { }

  ngOnInit() {

    let productID:number = this.routeInfo.snapshot.params['pid'];

    this.product = this.productService.getProduct(productID);
    this.comments = this.productService.getCommentForProductId(productID);
  }

  Onclick(event:any){
    console.info("hahahah");
  }

}
