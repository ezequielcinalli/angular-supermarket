import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Product[]>;
  public total:number;
  
  constructor(private cart: CartService) { 
    this.cartList$ = cart.cartList.asObservable();
    this.total = cart.total;
  }

  ngOnInit(): void {
  }

}
