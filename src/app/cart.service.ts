import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartList: Product[] = [];
  public cartList: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public total:number = 0;

  constructor() { }

  public addToCart(product: Product) {
    let item: Product = this._cartList.find((v1) => v1.name == product.name);
    if (!item) {
      this._cartList.push({ ...product });
    } else {
      item.quantity += product.quantity;
    }
    this.total+= product.price * product.quantity;
    this.cartList.next(this._cartList); 
  }
}
