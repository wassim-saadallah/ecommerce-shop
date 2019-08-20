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
  ngOnInit() {
    this.http.get<Item[]>('http://localhost:3000/items/top/5')
      .subscribe(items => {
        console.log(items)
        this.items = items.map(item => {
          item.categories = item.categories.split(',').slice(0, 3).join(',');
          console.log(item.categories)
          return item
        })
      });
  }
  addToCart(item: Item) {
    this.cartService.add(item)
  }

}
