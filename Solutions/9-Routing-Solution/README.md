# Routing Solution

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
   * Be able to navigate both in the View and Component Class
   * Understand how to use params and queryParams
   * Understand how to use ActivatedRoute snapshot and subscribe
   * Be able to create Root Level routing module and Feature Level routing module
   
## Solution Steps
### Create AppRoutingModule
  * Create _app-routing.module_ file and initialize an NgModule AppRoutingModule which exports RouterModule
  * Define the Routes parameter
  * Define the default route and have it redirectTo Products with pathMatch='full'
  * Define the NotFound route used by the NotFoundComponent, which we need to create	
    ```angular2html
    const routes: Routes = [
      { path: '', redirectTo: 'Products', pathMatch: 'full'},
      { path: '**', component: NotFoundComponent }
    ];
    ```  
  * For the module to register the routes, import the _RouterModule_ using _.forRoot(routes)_ `RouterModule.forRoot(routes)`
  * Import the AppRoutingModule in the AppModule **NOTE** Should be the last Module imported since routing order does matter and other modules later imported could have their own routing modules who's path needs to be checked before the default and not found.
   
### Create NotFoundComponent
  * Create the not-found.component on the app level
  * Do not worry about the selector since this is being determined by the route
  * In the template, just put an h3 tag for "Page Not Found"
  * Leave the NotFoundComponent class empty
  * Declare the component in the AppModule
   
### Modify the AppComponent HTML
  * Replace the _<products></products>_ tag with a _<router-outlet></router-outlet>_
   
### ProductsRoutingModule
  * Create _products-routing.module_ file and initialize an NgModule ProductsRoutingModule which exports RouterModule
  * Define the Routes parameter
  * Define the Products path used by the ProductsComponent, and has the following children
  * Define a details path 'Details/:id' used by the ProductDetailsComponent for editing products
  * Define a details path 'Details' used by the ProductDetailsComponent for new products
    * **NOTE** As the first path expects an :id, we need to create the 2nd path for new products. 
  * Definte a default child path '' used by the ProductListComponent
      ```angular2html
      const routes: Routes = [
        {
          path: 'Products',
          component: ProductsComponent,
          children: [
            { path: 'Details/:id', component: ProductDetailsComponent },
            { path: 'Details', component: ProductDetailsComponent },
            { path: '', component: ProductListComponent },
          ]
        }
      ];
      ```  
  * For the module to register the routes, import the RouterModule using .forChild(routes) `RouterModule.forChild(routes)` 	
    * **NOTE** Notice that the Feature Routing module used the .forChild
  * Import the ProductsRoutingModule in the ProducstModule
   
### Modify the ProductsComponent
  * Remove the current HTML and replace with it's own _<router-outlet></router-outlet>_ tag
   
### Modify ProductListComponent (Remove Parent/Child Relationship)
  * Remove the Input/Output properties
  * Remove the changeDetection metadata
  * Copy over the OnInit implementation from ProductsComponent to ProductListComponent
    * As it is there in ProducttListComponent, inject the ProductService
    * As it is there in ProducttListComponent, define an empty array of products
  * Copy over the addToCartHandler method
    * As it is there in ProducttListComponent, inject the CartService and NotificationService
  * In the ProductList View, remove the _"Create New Product"_ click event, and replace it with a routerLink property set to Details. No ID is needed, since this is a new product
      ```angular2html
      <button type="button" class="btn btn-block btn-primary" routerLink="Details">CREATE NEW PRODUCT</button>
      ```  
  * In the ProductList View, adjust the product name tag to be an anchor tag. Also remove the click event to be a _routerLink_ property that is bound to an array template expression with the first index being Details and the second index being the productId. This array builds the _Details/:id_
      ```angular2html
      <a [routerLink]="['Details', product.id]">{{ product.name }}</a>
      ```   
  * In the ProductList View, adjust the _"Add To Cart"_ click event binding to call the _addToCartHandler_
   
### Modify ProductDetailsComponent (Remove Parent/Child Relationship)
  * Remove the Output properties
  * Remove the Input decorator from the item variable and intialize to an new Product
  * In order to get the current route properties, inject the ActivatedRoute
  * Implement the OnInit lifecycle event
    * Using the _ActivatedRoute_, get a _snapshot_ of the current route. Using this snapshot's _paramMap_, get the id route parameter
    * **NOTE** Even if the route parameter was set as a number, it will be returned as a string from the paramMap. A quick way to cast it to a number is to put a _plus (+)_ sign in from of the code.
      ```angular2html
      const productId = +this.route.snapshot.paramMap.get('id');
      ```    
    * If the id route parameter exists (meaning this is an edit), the product detail needs to be retrieved
      * Copy the _selectedProductHandler_ method code from ProductsComponent to here. Inject necessary services, and make adjustments to the subscribe to set the correct property
  * Copy over the _saveProductHandler_ method
    * Keep the validation check and the save, but the _concat_ to get products is not needed.
    * Upon a successful save, use the _Router_ to _navigate_ to the products		
      ```angular2html
      this.productService.save(product).subscribe(() => this.router.navigate(['/Products']));
      ```    
  * In the ProductDetails View, remove the _"Cancel"_ click event, and replace it with a _routerLink_ property set to _/Products_
    * **NOTE** the forward slash here tells the routerLink to start from the root
  * In the ProductDetails View, adjust the _"Save"_ click event binding to call the _saveProductHandler_
   
### Modify NavBarComponent
  * In the NavBar View, adjust the brand tag to be an anchor tag. Also add a _routerLink_ property that is bound to the default route _"/"_
