import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shop/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  items: Item[]
  cateogries$: Observable<string[]>
  brands$: Observable<string[]>
  filteredItems: Item[]
  item: Item
  constructor(private http: HttpClient, private modal: NgbModal) {


  }

  ngOnInit() {
    this.http.get<Item[]>('http://localhost:3000/items')
      .subscribe(items => {
        this.items = items
        this.filteredItems = items
      })
    this.cateogries$ = this.http.get<string[]>('http://localhost:3000/items/categories')
    this.brands$ = this.http.get<string[]>('http://localhost:3000/items/brands')

  }


  filter(filterText: string) {
    if (filterText.length > 0)
      this.filteredItems = this.items.filter((item) => (item.asins + item.brand + item.categories + item.id + item.name).toLowerCase().includes(filterText))
    else
      this.filteredItems = this.items
    console.log(this.filteredItems)
  }

  remove(index: number) {
    console.log('removed item at index ', index)
    this.filteredItems.splice(index, 1)
  }

  async edit(content, index) {
    this.item = this.filteredItems[index]
    const result = await this.modal.open(content, { size: 'lg' }).result
    console.log(result)
  }

}
