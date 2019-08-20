import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { Router } from '@angular/router';
import { CartService } from './services/cart.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  numPurchased$: Observable<number>;
  categories$: Observable<string[]>;

  constructor(private modalService: NgbModal, private router: Router, private cartService: CartService, private http: HttpClient) { }

  ngOnInit() {
    this.numPurchased$ = this.cartService.numPurchased$;
    this.categories$ = this.http.get<string[]>('http://localhost:3000/items/categories')
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
