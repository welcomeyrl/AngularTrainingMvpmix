import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../core/services/cart.service';
import { NotificationMessage } from '../shared/models/notification-message.model';
import { NotificationService } from '../core/services/notification.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  private notificationSubscription: Subscription;
  cartItemsTotal: number = 0;

  constructor(private cartService: CartService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.getCartQuantity();

    this.notificationSubscription = this.notificationService.notificationObservable.subscribe((message: NotificationMessage) => {
      if (message.messageType === 'cartUpdated') {
        this.getCartQuantity();
      }
    });
  }

  ngOnDestroy() {
    if (this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
    }
  }

  getCartQuantity() {
    this.cartService.getCartQuantity().subscribe((totalItems: number) => this.cartItemsTotal = totalItems);
  }
}
