import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shop/home/home.component';
import { SearchResultListComponent } from './shop/search-result-list/search-result-list.component';


const routes: Routes = [
  {
    path: 'shop',
    component: SearchResultListComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
