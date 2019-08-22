import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  numPurchased$: Observable<number>;
  categories$: Observable<string[]>;
  brands$: Observable<string[]>;
  success: boolean;
  closed = false;
  constructor(private modalService: NgbModal, private router: Router, private cartService: CartService, private http: HttpClient) { }

  ngOnInit() {
    this.numPurchased$ = this.cartService.numPurchased$;
    this.categories$ = this.http.get<string[]>('http://localhost:3000/items/categories')
    this.brands$ = this.http.get<string[]>('http://localhost:3000/items/brands')
  }

  async open(ev: Event) {
    ev.preventDefault();
    const modalRef = this.modalService.open(CartComponent, { size: "lg" });
    this.success = await modalRef.result
    this.closed = false;
  }

  search(term: string) {
    this.router.navigate(['/shop/search', term]);
  }
}
