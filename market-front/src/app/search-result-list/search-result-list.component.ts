import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Item, CartService } from '../services/cart.service';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent implements OnInit {

  searchResults: Item[]
  searchTerm: string;
  loaded = false;
  errorMessage: string = null;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private cartService: CartService) { }

  async ngOnInit() {
    this.activatedRoute.params.pipe(map(a => a.term)).subscribe(term => this.searchTerm = term);
    this.http.get<Item[]>('http://localhost:3000/items/search/term/' + this.searchTerm)
      .subscribe(
        searchResults => {
          console.log({ searchResults })
          if (searchResults.length === 0) this.errorMessage = 'No results found'
          else {
            this.searchResults = searchResults.map(item => {
              item.categories = item.categories.split(',').slice(0, 3).join(',');
              console.log(item.categories)
              return item
            })
            console.log(this.searchResults)
          }
          this.loaded = true;
        },
        err => {
          this.searchResults = []
          this.errorMessage = 'No results found'
        })
  }

  addToCart(item: Item) {
    this.cartService.add(item)
  }

}
