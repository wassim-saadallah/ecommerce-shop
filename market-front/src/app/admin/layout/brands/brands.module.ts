import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { PageHeaderModule } from '../../shared';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BrandsComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    PageHeaderModule,
    FormsModule
  ]
})
export class BrandsModule { }
