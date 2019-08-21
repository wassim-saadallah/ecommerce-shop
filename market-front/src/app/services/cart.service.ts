import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  id: string;
  asins: string;
  brand: string;
  categories: string;
  colors: string;
  dateAdded: string;
  dateUpdated: string;
  dimension: string;
  ean: string;
  imageURLs: string;
  keys: string;
  manufacturer: string;
  manufacturerNumber: string;
  name: string;
  primaryCategories: string;
  upc: number;
  weight: string;
  price: number;
}

export interface CartItem {
  item: Item,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: { [id: string]: CartItem } = {}
  numPurchased$ = new BehaviorSubject<number>(Object.values(this.cart).length)

  constructor(private http: HttpClient) { }

  add(item: Item) {
    if (!this.cart[item.id]) this.cart[item.id] = { item: item, quantity: 1 };
    else this.cart[item.id].quantity += 1;
    console.log(this.cart)
    this.numPurchased$.next(Object.values(this.cart).length)
  }

  async save(): Promise<boolean> {
    const { success } = await this.http.post<{ success: boolean }>('http://localhost:3000/cart', this.cart).toPromise();
    return success;
  }

}
