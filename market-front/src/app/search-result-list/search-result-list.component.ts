import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap, filter } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Item, CartService } from '../services/cart.service';
import { Observable, identity } from 'rxjs';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent implements OnInit {

  searchResults: Item[] = [];
  private searchTerm: string;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private cartService: CartService) { }

  async ngOnInit() {
    this.activatedRoute.params.pipe(map(a => a.term)).subscribe(term => this.searchTerm = term);
    const results = await this.http.get<Item[]>('http://localhost:3000/items/search/' + this.searchTerm)
      .pipe(flatMap(identity),
        filter(item => ))
    for (let item of results) {
      if (this.searchResults.findIndex(val => item.id == val.id) < 0) {
        this.searchResults.push(item)
        console.log(item)
      }
    }
  }

  addToCart(item: Item) {
    this.cartService.add(item)
  }

}
