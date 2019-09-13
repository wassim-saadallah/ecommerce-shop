import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  brands: string[]
  filteredBrands: string[]
  newBrand: string

  constructor(private http: HttpClient) {
    console.log("waaaa")
  }
  ngOnInit() {
    this.http.get<string[]>('http://localhost:3000/items/brands')
      .subscribe(brandList => {
        this.brands = brandList;
        this.filteredBrands = brandList
        console.log(brandList)
      })
  }

  add() {
    this.brands.push(this.newBrand)
    this.newBrand = ''
  }


  filter(filterText: string) {
    if (filterText.length > 0)
      this.filteredBrands = this.brands.filter((item) => item.toLowerCase().includes(filterText))
    else
      this.filteredBrands = this.brands
  }

  remove(index: number) {
    console.log('removed item at index ', index)
    this.filteredBrands.splice(index, 1)
  }


}
