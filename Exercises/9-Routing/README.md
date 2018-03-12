# Routing Problem

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
   
## Problem Steps
### Create AppRoutingModule
  * Create _app-routing.module_ file and initialize an NgModule AppRoutingModule which exports RouterModule
  * Define the Routes parameter
  * Define the default route and have it redirectTo Products with pathMatch = 'full'
  * Define the NotFound route used by the NotFoundComponent, which we need to create	 
  * For the module to register the routes, import the _RouterModule_ using _.forRoot(routes)_ 
  * Import the AppRoutingModule in the AppModule 
   
### Create NotFoundComponent
  * Create the not-found.component on the app level
  * Do not worry about the selector since this is being determined by the route
  * In the template, just put an h3 tag for "Page Not Found"
  * Leave the NotFoundComponent class empty
  * Declare the component in the AppModule
   
### Modify the AppComponent HTML
  * Instead of specifying a products child component, put in a router outlet tag
   
### ProductsRoutingModule
  * Create _products-routing.module_ file and initialize an NgModule ProductsRoutingModule which exports RouterModule
  * Define the Routes parameter
  * Define the _'Products'_ path used by the _ProductsComponent_, and has the following _children_
  * Define a details path _'Details/:id'_ used by the _ProductDetailsComponent_ for editing products
  * Define a details path _'Details'_ used by the _ProductDetailsComponent_ for new products
    * **NOTE** As the first path expects an :id, we need to create the second path for new products. 
  * Definte a default child path '' used by the _ProductListComponent_
      ```angular2html
      const routes: Routes = [
        {
          path: 'path',
          component: Component,
          children: []
        }
      ];
      ```  
  * For the module to register the routes, import the RouterModule using .forChild(routes) 	
  * Import the ProductsRoutingModule in the ProducstModule
   
### Modify the ProductsComponent
  * Remove the current HTML and replace with it's own _<router-outlet></router-outlet>_ tag
   
### Modify ProductListComponent (Remove Parent/Child Relationship)
  * Remove the Input/Output properties
  * Remove the changeDetection metadata
  * Copy over the OnInit implementation from ProductsComponent to ProductListComponent
  * Copy over the addToCartHandler method
  * In the ProductList View, remove the _"Create New Product"_ click event, and replace it with a _routerLink_ property set to _'Details'_. No ID is needed, since this is a new product
  * In the ProductList View, adjust the product name tag to be an anchor tag. Also remove the click event to be a _routerLink_ property that is bound to an array template expression with the first index being Details and the second index being the productId. This array builds the _Details/:id_
  * In the ProductList View, adjust the _"Add To Cart"_ click event binding to call the _addToCartHandler_
   
### Modify ProductDetailsComponent (Remove Parent/Child Relationship)
  * Remove the Output properties
  * Remove the Input decorator from the item variable and intialize to an new Product
  * In order to get the current route properties, inject the ActivatedRoute
  * Implement the OnInit lifecycle event
    * Using the _ActivatedRoute_, get a _snapshot_ of the current route. Using this snapshot's _paramMap_, get the id route parameter
    * **NOTE** Even if the route parameter was set as a number, it will be returned as a string from the paramMap. A quick way to cast it to a number is to put a _plus (+)_ sign in from of the code.
    * If the id route parameter exists (meaning this is an edit), the product detail needs to be retrieved
      * Copy the _selectedProductHandler_ method code from ProductsComponent to here. Inject necessary services, and make adjustments to the subscribe to set the correct property
  * Copy over the _saveProductHandler_ method
    * Keep the validation check and modify the save to use the _Router_ to _navigate_ to the products when successful		
  * In the ProductDetails View, remove the _"Cancel"_ click event, and replace it with a _routerLink_ property set to _/Products_
  * In the ProductDetails View, adjust the _"Save"_ click event binding to call the _saveProductHandler_
   
### Modify NavBarComponent
  * In the NavBar View, adjust the brand tag to be an anchor tag. Also add a _routerLink_ property that is bound to the default route
