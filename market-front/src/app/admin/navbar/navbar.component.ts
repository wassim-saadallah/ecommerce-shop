import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export const componentsList = [
  'Accordion', 'Alert', 'Buttons', 'Carousel', 'Collapse', 'Datepicker', 'Dropdown', 'Modal', 'Pagination', 'Popover',
  'Progressbar', 'Rating', 'Table', 'Tabset', 'Timepicker', 'Toast', 'Tooltip', 'Typeahead'
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  components = componentsList;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  isActive(currentRoute: any[], exact = true): boolean {
    return this.router.isActive(this.router.createUrlTree(currentRoute), exact);

  }
}
