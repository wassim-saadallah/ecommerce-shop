import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, flatMap, filter, tap } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Item, CartService } from '../services/cart.service';
import { Observable, identity } from 'rxjs';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent implements OnInit {

  searchResults: Item[]
  private searchTerm: string;
  private loaded = false;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private cartService: CartService) { }

  async ngOnInit() {
    this.activatedRoute.params.pipe(map(a => a.term)).subscribe(term => this.searchTerm = term);
    this.searchResults = await this.http.get<Item[]>('http://localhost:3000/items/search/' + this.searchTerm).toPromise()
    this.searchResults = this.searchResults.map(item => {
      item.categories = item.categories.split(',').slice(0, 3).join(',');
      console.log(item.categories)
      return item
    })
    this.loaded = true;
  }

  addToCart(item: Item) {
    this.cartService.add(item)
  }

}
