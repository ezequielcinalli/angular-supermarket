import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { PRODUCTS } from '../mock-products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalogue-products',
  templateUrl: './catalogue-products.component.html',
  styleUrls: ['./catalogue-products.component.scss']
})
export class CatalogueProductsComponent implements OnInit {
  faCartArrowDown = faCartArrowDown;
  products: Product[] = this.productService.getAll();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  public upQuantityCart():void{

  }

  public downQuantityCart():void{
    
  }

  public addToCart():void{
    console.log("entro a addToCart");
  }

}
