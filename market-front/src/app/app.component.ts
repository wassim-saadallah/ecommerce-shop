import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { Router } from '@angular/router';
import { CartService } from './services/cart.service';
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  numPurchased$: Observable<number>;
  numPurchased: number;

  constructor(private modalService: NgbModal, private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.numPurchased$ = this.cartService.numPurchased$;
    //this.cartService.$numPurchased.subscribe((val => this.numPurchased = val));
  }
  open(ev: Event) {
    ev.preventDefault();
    const modalRef = this.modalService.open(CartComponent);
  }

  search(term: string) {
    console.log(term)
    this.router.navigate(['/search', term]);
  }

}
