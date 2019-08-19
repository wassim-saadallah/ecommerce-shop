import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private modalService: NgbModal, private router: Router) { }

  open(ev: Event) {
    ev.preventDefault();
    const modalRef = this.modalService.open(CartComponent);
    modalRef.componentInstance.name = 'waaaaaa'
  }

  onSubmit() {
    console.log('clicked');
    this.router.navigate(['/search']);
  }
}
