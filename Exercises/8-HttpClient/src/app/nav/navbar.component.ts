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
  cartItemsTotal: number = 0;
  notificationSubscription: Subscription;

  constructor(private cartService: CartService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notificationObservable.subscribe((message: NotificationMessage) => {
      if (message.messageType === 'cartUpdated') {
        this.cartItemsTotal = this.cartService.getCartQuantity();
      }
    });
  }

  ngOnDestroy() {
    if (this.notificationSubscription) {
      this.notificationSubscription.unsubscribe();
    }
  }
}
