import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService, Item } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private cartService: CartService) { }

  cartEntries: [Item, number][]; // because we cant iterate a map in angular
  ngOnInit() {
    this.cartEntries = [...this.cartService.cart];
  }

}
