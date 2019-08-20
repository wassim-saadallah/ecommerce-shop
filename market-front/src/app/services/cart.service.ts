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
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new Map<Item, number>();
  numPurchased$ = new BehaviorSubject<number>(this.cart.size)

  constructor(private http: HttpClient) { }

  add(item: Item) {
    if (!this.cart.has(item)) this.cart.set(item, 1)
    else this.cart.set(item, this.cart.get(item) + 1)
    console.log(this.cart)
    this.numPurchased$.next(this.cart.size)
  }

  async save(): Promise<boolean> {
    const { success } = await this.http.post<{ success: boolean }>('http://localhost:3000/cart', this.cart).toPromise();
    return success;
  }

}
