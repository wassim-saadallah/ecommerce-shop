import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchResultListComponent,
    CartComponent,
    ShopComponent,
    HeaderComponent,
    CategoriesComponent,
    BrandsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbModule.forRoot()
  ],
  entryComponents: [CartComponent]
})
export class ShopModule { }
