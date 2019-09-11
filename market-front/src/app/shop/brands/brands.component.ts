import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Item } from '../services/cart.service';
import { map, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  items$: Observable<Item[]>

  brand: string
  public numItems = 17;
  public page = 1;
  public pageSize = 5;
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  async ngOnInit() {
    this.items$ = this.activatedRoute.params
      .pipe(
        map(params => params.brand as string),
        tap(brand => {
          this.brand = brand
          console.log(brand)
        }),
        switchMap(brand => this.http.get<Item[]>('http://localhost:3000/items/search/brand/' + brand)))

    this.items$.subscribe(console.log)
  }

}
