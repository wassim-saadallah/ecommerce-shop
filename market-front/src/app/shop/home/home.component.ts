import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Item, CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private cartService: CartService) { }

  public items: Item[];
  public numPurchased: number;
  public numItems = 17;
  public page = 1;
  public pageSize = 5;
  ngOnInit() {
    this.http.get<Item[]>('http://localhost:3000/items/top/' + this.numItems)
      .subscribe(items => {
        this.items = items.map(item => {
          item.categories = item.categories.split(',').slice(0, 3).join(',');
          return item
        })
      });
  }
  addToCart(item: Item) {
    this.cartService.add(item)
  }

  changePage(ev: Event) {
    window.scrollTo(0, 0)
  }

}
