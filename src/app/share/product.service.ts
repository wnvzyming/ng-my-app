import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {


  private products: Product[] = [
    new Product(1,"测试商派1",3.5,1,["电子产品" ,"图书","衣服"]),
    new Product(2,"测试商派2",3.5,2,["图书","电子产品"]),
    new Product(3,"测试商派3",3.5,3,["电子产品","图书"]),
    new Product(4,"测试商派1",3.5,2,["电子产品","衣服"]),
    new Product(5,"测试商派2",3.5,4,["衣服","图书"]),
    new Product(6,"测试商派3",3.5,3,["图书","衣服"]),
  ];

  private comments: Comment[] = [
    new Comment(1,"东西不错1",3,1,"张三","2017-12-12 15:11:25"),
    new Comment(2,"东西不错2",3,2,"李四","2017-12-12 15:11:25"),
    new Comment(3,"东西不错3",1,3,"王五","2017-12-12 15:11:25"),
    new Comment(4,"东西不错1",2,2,"马六","2017-12-12 15:11:25"),
    new Comment(5,"东西不错2",4,4,"黑七","2017-12-12 15:11:25"),
    new Comment(6,"东西不错3",5,3,"胡八","2017-12-12 15:11:25")
  ];

  constructor() { }

  getAllCate(): String[] {
    return ["电子产品","图书","衣服"];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id:number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentForProductId(id:number): Comment[] {
    return this.comments.filter((comment: Comment)=> comment.productId== id);
  }

}

export  class  Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public star: number,
    public cate: Array<string>

  ) { }
}


export  class  Comment {
  constructor(
    public id: number,
    public content: string,
    public productId: number,
    public rating: number,
    public user: string,
    public timestamp: string

  ) { }
}
