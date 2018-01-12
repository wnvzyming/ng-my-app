import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {ProductService} from "../share/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  cate: String[];

  constructor(private productService: ProductService) {

    let fb = new FormBuilder();
    this.formModel = fb.group(
      {
        title: ['',Validators.minLength(3)],
        price: [null,this.postChenkNUmber],
        cate: ['-1']
      }
    )
  }

  ngOnInit() {

    this.cate = this.productService.getAllCate();

  }

  //自定义校验
  postChenkNUmber(control: FormControl): any{
    if ( !control.value){
      return null;
    }
    let price = parseInt(control.value);
    if (price > 0){
      return null;
    }else {
      return {postNumber: true};
    }
  }

  onSearch() {
    if (this.formModel.valid){
      console.info(this.formModel.value);
    }
  }

}
