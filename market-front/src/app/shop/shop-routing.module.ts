import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'search/:term',
        component: SearchResultListComponent,
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'categories/:category',
        component: CategoriesComponent,
      },
      {
        path: 'brands/:brand',
        component: CategoriesComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
