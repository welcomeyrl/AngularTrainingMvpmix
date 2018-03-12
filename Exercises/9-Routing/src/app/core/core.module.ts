import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApiService } from './services/api.service';
import { ApiTimerInterceptor } from './interceptors/api-timer.interceptor';
import { CartService } from './services/cart.service';
import { NotificationService } from './services/notification.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    // Interceptors
    { provide: HTTP_INTERCEPTORS, useClass: ApiTimerInterceptor, multi: true },

    // Services
    {provide: CartService, useClass: CartService},
    {provide: NotificationService, useClass: NotificationService},
    {provide: ApiService, useClass: ApiService}
  ]
})
export class CoreModule {}
