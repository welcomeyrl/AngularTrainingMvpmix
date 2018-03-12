# Dependency Injection Solution

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Objective
  * Be able to add products to cart through a cart service. 
  * Upon successfully adding an item to cart, publish an internal application notification, which is observed by the navbar. The navbar will then make a call to the cart service to get the # of items.

## Problem Steps
### Create CartItem Model
  * Create _cart-item.model_ in the shared/models folder with the following properties
    * productId: number
    * quantity: number
### Create CartService
  * Create _cart.service_ in the core/services folder
	* Define and initialize a local variable _cart_ of type Array<CartItem>, which will be used for in-memory storage
	* Create an addProduct method
	* Create a getCartQuantity method
### Create NotificationMessage Model
  * Create _notification-message.model_ in the shared/models folder with the following properties
    * messageType: string;
    * messageData: any;
### Create NotificationService
  * Create _notification.service_ in the core/services folder
  * Declare and initialize a typed _rxjs/Subject_ of _NotificationMessage_ that will emit the messageType and messageData `Subject<NotificationMessage>`
  * Declare a typed _rxjs/Observable_ of _NotificationMessage_ that observers will be able to subscribe to `Observable<NotificationMessage>`
  * In the constructor, set this notificationObservable equal to the subject as an observable `.asObservable()`
  * Now that the Subject is defined/initialized and the Observable that observers can subscribe to is defined/initialized, a method needs to be created to emit a new NotificationMessage 
    * Declare a _notify_ method which takes two parameters (messageType and messageData where messageData can be undefined)
    * Within the method set the next NotificationMessage for the Subject `notificationSubject.next()`
### Add Item To Cart
  * In the product-list.component.html and next to each product name, put in an _"Add to Cart"_ button
    * Bind to the button's click event to an Output property emitting the productId
  * In the products.component.html, bind to the new output property from product-list
  * In the products.component class
    * Call the cartService.addProduct method, passing in the productId
    * Upon a successful addProduct call, call the notify method on the NotificationService with a messageType of _cartUpdated_, and no data 
### Need to listen for when new produts are added to the cart
  * In the nav component html, use interpolation to add in the total number of items in the cart
    * **NOTE** There are much better ways to display the cart total, but this is simple for now
  * In the nav component class' OnInit lifecycle event, subscribe to the NotificationService.notificationObservable
    * Upon receiving a _cartUpdated_ message, get the total quantity of cartItems
