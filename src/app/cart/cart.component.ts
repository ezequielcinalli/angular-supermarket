import { Component, OnInit } from '@angular/core';
import { PURCHASES } from '../mock-purchases';
import { Purchase } from '../Purchase';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Purchase[] = PURCHASES;
  constructor() { }

  ngOnInit(): void {
  }

}
