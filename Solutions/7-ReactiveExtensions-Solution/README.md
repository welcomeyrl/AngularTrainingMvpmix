# Reactive Extensions Solution

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Objective
  * Be able to add products to cart through a cart service. 
  * Upon successfully adding an item to cart, publish an internal application notification, which is observed by the navbar. The navbar will then make a call to the cart service to get the # of items.

## Solution Steps
### Create CartItem Model
  * Create _cart-item.model_ in the shared/models folder with the following properties
    * productId: number
    * quantity: number
### Create CartService
  * Create _cart.service_ in the core/services folder
	* Define and initialize a local variable _cart_ of type Array<CartItem>, which will be used for in-memory storage
	* Create an addProduct method, which takes a productId and will update the array of cart items or quantity of the cart items
	* Create a getCartQuantity method, which will return the total quantity of the cart
	* Declare this as a provider in the CoreModule provided
### Create NotificationMessage Model
  * Create _notification-message.model_ in the shared/models folder with the following properties
    * messageType: string;
    * messageData: any;
### Create NotificationService
  * Create _notification.service_ in the core/services folder
  * Declare and initialize a typed _Subject_ of _NotificationMessage_ that will emit the messageType and messageData
      ```angular2html
      import { Subject } from "rxjs/Subject";
      private notificationSubject = new Subject<NotificationMessage>();
      ```
  * Declare a notificationObservable of type NotificationMessage
    ```angular2html
    import { Observable } from 'rxjs/Observable';
    notificationObservable: Observable<NotificationMessage>;
    ```
  * In the constructor, set this notificationObservable equal to the subject as an observable
    ```angular2html
    constructor() {
      this.notificationObservable = this.notificationSubject.asObservable();
    }
    ```
  * Now that the Subject is defined/initialized and the Observable that observers can subscribe to is defined/initialized, a method needs to be created to emit a new NotificationMessage 
    * Declare a notify method which takes two parameters (messageType and messageData where messageData can be undefined)
        ```angular2html
        notify(messageType: string, messageData?: any)
        ```
    * Within the method set the next NotificationMessage for the Subject
        ```angular2html
        this.notificationSubject.next(<NotificationMessage>{messageType: messageType, messageData: messageData});
        ```
  * Declare this service as a provider in the CoreModule provided
### Add Item To Cart
  * In the product-list.component.html and next to each product name, put in an _"Add to Cart"_ button
    * Bind to the button's click event to an Output property emitting the productId
  * In the products.component.html, bind to the output property from product-list
  * In the products.component class
    * Inject the CartService and the NotificationService
    * In the handler just associated to the "Add to Cart" click event
      * Call the cartService.addProduct method, passing in the productId
      * Upon a successful addProduct call, call the notify method on the NotificationService with a messageType of _cartUpdated_, and no data 
### Need to listen for when new produts are added to the cart
  * In the nav component html, use interpolation to add in the total number of items in the cart
    * **NOTE** There are much better ways to display the cart total, but this is simple for now
  * In the nav component class,
    * Inject the CartService and the NotificationService
    * Implement the OnInit lifecycle event and subscribe to the NotificationService.notificationObservable
      * Upon a value being observed, check the messageType. If the messageType is _cartUpdated_, call the cartService to get the total quantity of cartItems
      * Set the subscription to a private class varible notificationSubscription
    * Implement the OnDestroy lifecycle event
      * Inside this method, unsubscribe from the notificationSubscription. **NOTE**, even though the app would have to close for the NavBarComponent to be destroyed, this is a good practice 
