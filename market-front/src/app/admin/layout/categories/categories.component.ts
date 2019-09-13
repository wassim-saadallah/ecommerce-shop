import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  cateogries: string[]
  filteredCategories: string[]
  newCategory: string

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<string[]>('http://localhost:3000/items/categories')
      .subscribe(catList => {
        this.cateogries = catList;
        this.filteredCategories = catList
        console.log(catList)
      })
  }

  add() {
    this.cateogries.push(this.newCategory)
    this.newCategory = ''
  }


  filter(filterText: string) {
    if (filterText.length > 0)
      this.filteredCategories = this.cateogries.filter((item) => item.toLowerCase().includes(filterText))
    else
      this.filteredCategories = this.cateogries
  }

  remove(index: number) {
    console.log('removed item at index ', index)
    this.filteredCategories.splice(index, 1)
  }


}
