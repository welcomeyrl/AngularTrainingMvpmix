import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartService } from './services/cart.service';
import { NotificationService } from './services/notification.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    {provide: CartService, useClass: CartService},
    {provide: NotificationService, useClass: NotificationService}
  ]
})
export class CoreModule {}
