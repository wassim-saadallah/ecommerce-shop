import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    DashboardComponent,
    ItemListComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    NgbModule.forRoot()
  ]
})
export class AdminModule { }
