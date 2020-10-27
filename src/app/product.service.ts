import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import {Product} from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  get(id: number): Product{
    return null;
  }

  getAll(): Product[]{
    return PRODUCTS;
  }
}
