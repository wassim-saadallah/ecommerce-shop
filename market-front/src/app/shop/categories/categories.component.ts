import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Item } from '../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  items$: Observable<Item[]>
  category: string
  public numItems = 17;
  public page = 1;
  public pageSize = 5;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  async ngOnInit() {
    this.items$ = this.activatedRoute.params
      .pipe(
        map(params => params.category as string),
        tap(category => this.category = category),
        switchMap(category => this.http.get<Item[]>('http://localhost:3000/items/search/category/' + category)))

    this.items$.subscribe(console.log)
  }

}
