import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchResultListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [CartComponent]
})
export class ShopModule { }
