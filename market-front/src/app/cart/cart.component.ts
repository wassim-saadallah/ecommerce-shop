import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService, CartItem } from '../services/cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private cartService: CartService) { }
  // because we cant iterate a map in angular and we need a price for each item
  // [item, qty, price]
  cartEntries: CartItem[];
  total$: BehaviorSubject<number> = new BehaviorSubject(0);
  loading: boolean = false;
  closed = true;
  ngOnInit() {
    this.cartEntries = Object.values(this.cartService.cart).map((cartItem) => {
      cartItem.item.price = Math.random() * 100
      return cartItem
    });
    this.total$.next(this.calculateTotal());
  }

  setQuantity(newQty: number, index: number) {
    this.cartEntries[index].quantity = newQty;
    this.total$.next(this.calculateTotal());
  }

  calculateTotal(): number {
    return this.cartEntries.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.item.price), 0);
  }

  delete(index: number) {
    this.cartEntries.splice(index);
    this.total$.next(this.calculateTotal());
  }

  async checkout() {
    if (this.cartEntries.length == 0) {
      this.closed = false
    } else {
      this.loading = true;
      await new Promise(res => setTimeout(res, 1000));
      this.activeModal.close(Math.random() > 0.5)
    }
  }


}
