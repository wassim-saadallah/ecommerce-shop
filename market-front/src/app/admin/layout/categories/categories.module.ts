import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    PageHeaderModule,
    FormsModule
  ]
})
export class CategoriesModule { }
