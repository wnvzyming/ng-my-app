import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { HomeComponent } from './home/home.component';
import { ProductdetilComponent } from './productdetil/productdetil.component';
import {ProductService} from "./share/product.service";
//import {Route, RouterModule} from "@angular/router";

import { RouterModule } from '@angular/router';
import {Route} from "@angular/compiler/src/core";
import {ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './pipe/filter.pipe';


const routeConfig: Route = [
  {path: '', component: HomeComponent},
  {path: 'product/:pid', component: ProductdetilComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    HomeComponent,
    ProductdetilComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule// 响应式编程引入的模块
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
