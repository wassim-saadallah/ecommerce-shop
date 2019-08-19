import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private items: any[];
  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/items/top/5')
      .subscribe(items => this.items = items);

  }

}
