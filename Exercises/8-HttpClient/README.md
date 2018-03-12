# HttpClient Problem

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**
1. Clone the solution to NetCoreAPI

## Setup and Run Angular Code
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Setup and Run .Net Core API
1. From the command prompt run the following dotnet cli commands
1. dotnet restore
1. dotnet build
1. dotnet run

## Objective
  * Have current ProductService and CartService get and save data to an actual api
  * Log the time it takes to make these calls

## Proxy Information
  * **NOTE:** This has been done for you
  * In order to run the dotnet cli and the angular cli side by side and be able to call into the .Net Core WebAPI, we need to proxy our api calls from the Angular ClI
  * A _proxy.conf.json_ file has been created designating that all api calls go through port **12161** (that is the port designated in the launchSettings.json of the .Net Core project)
  * To use this proxy config file, in the package.json file, the following option has been added to the ng serve command _--proxy-config ./proxy.conf.json_

## Problem Steps
### Create API Service
  * In core/services folder, create an api.service file for ApiService and decorate it with @Injectable
  * In the constructor, inject HttpClient
  * For this problem, setup for basic CRUD operations 
    * **GET** 
      * Use a generic `get<T>` and return a typed Observable of the generic typed `Observable<T>`
      * Parameters: url path and an optional HttpParams object   
    * **POST/PUT**
      * Parameters: url path an an optional body object
      * Return an Observable of type void    
    * **DELETE**
      * Parameters: url path
      * Return an Observable of type void
	* All operations will return a typed observable, can be void 
	* Add in the Rx operator catch to catch any exception. Just log to console and re-throw	
	* In the core.module, import the HttpClientModule and register the ApiService
	
### Refactor Products Service
  * WebAPI URL Paths:
    * **GET:** /api/products
    * **GET:** /api/products/:productId
    * **POST:** /api/Products
    * **PUT:** /api/products/:productId
  * Inject the ApiService
  * Change all the return types to be wrapped in an Observable, regardless of it is a value or void
  * In getAll, use the Rx **[map](https://www.learnrxjs.io/operators/transformation/map.html)** operator `import 'rxjs/add/operator/map';` to still be able to sort
 
### Refactor Cart Service
  Web* API URL Paths **NOTE** For this Problem, declare a static cartId of 1
    * **GET:** /api/cart/:cartId/items
    * **PUT:** /api/cart/:cartId/item
  * Inject the ApiService
  * Change all the return types to be wrapped in an Observable, regardless of it is a value or void
  * In getCartQuantity, use the Rx **[map](https://www.learnrxjs.io/operators/transformation/map.html)** operator to determine the total quantity to pass back since an array of CartItems is being returned

### Refactor ProductsComponent 
  * Modify the current ngOnInit _productService.getAll_ call to _subscribe_ to the observable and set the products appropriately
  * Modify the call to _productService.get_ to _subscribe_ and set the selectedProduct appropriately
  * Modify the call to _productService.save_ to use the Rx **[concat](https://www.learnrxjs.io/operators/combination/concat.html)** operator and **[last](https://www.learnrxjs.io/operators/filtering/last.html)** operator to save the product. Then upon that completing, it will then call the _productService.getAll_. We use the _last_ operator to only get the list of products as that is the last value emitted from the concattenated observables. Also, in the subscribe complete, the selectedProduct is set to null
  * Modify the call to _cartService.addProduct_ to call _subscribe_ and upon success then call the notification service 
 
### Refactor NavBarComponent
  * Modify the call to _cartservice.getCartQuanitty_ to _subscribe_ and set the cartItemsTotal appropriately
	
### Create ApiTimerInterceptor to log call times
  * In core/interceptors folder, create an _api-timer.interceptor_ file with an ApiTimerInterceptor class, decorate it with @Injectable, and have it implement HttpInterceptor
  * HttpInterceptor requires the following default implementation
    ```angular2html
      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req);
      }
    ```
  * Modify the _intercept_ method to _do_ some work with the response using the Rx **[do](https://www.learnrxjs.io/operators/utility/do.html)** operator
  * In the do operator `.do(event => {})`, only work with the _HttpResponse_ event
  * Once the _HttpResponse_ event has arrived, a date value before the next call and a date value in the do operator can be compared to log the time to the console    
