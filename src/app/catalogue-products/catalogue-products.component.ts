import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { ModalMessageComponent } from '../modal-message/modal-message.component';


@Component({
  selector: 'app-catalogue-products',
  templateUrl: './catalogue-products.component.html',
  styleUrls: ['./catalogue-products.component.scss']
})
export class CatalogueProductsComponent implements OnInit {
  faCartArrowDown = faCartArrowDown;
  products: Product[];
  @ViewChild('content', { static: false }) private content;

  constructor(private productService: ProductService, private cartService:CartService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }

  addToCart(product:Product): void {
    this.cartService.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
    //mostrar modal informando que se agrego al carrito
    const modalRef = this.modalService.open(ModalMessageComponent);
    modalRef.componentInstance.message = "Se agrego "+product.name+" al carrito!";
  }

  maxReached(m: string) {
    const modalRef = this.modalService.open(ModalMessageComponent);
    modalRef.componentInstance.message = m;
  }

}
