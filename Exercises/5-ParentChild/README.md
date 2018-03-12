# Parent/Child Interaction Problem

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Problem Steps
### Create Dumb Component ProductListComponent
1. ProductList template: copy over html from app component template that only pertains to product list
1. In ProductList setup input property to take in list of products
1. In ProductList setup output property to emit a onSelected event of id
1. In ProductList setup output property to emit a onNewClick event

### Create Dumb Component ProductDetailsComponent
1. ProductList template: copy over html from app compnent template that pertains to product details
1. In ProductDetails setup input property to take in product
1. In ProductDetails setup output property to emit onSave of type Product
1. In ProductDetails setup output property to emit onCancel of type void

### Create Smart Component ProductsComponent
1. Initialize array of products
1. Template: ngIf ProductDetails else ProductList
1. Handler for onProductSelect
1. Handler for onNewProductClick
1. Handler for onSaveProductClick
1. Handler for onCancelProductClick

### Refactor AppComponent
1. Remove code from AppComponent class
1. Remove html from template but add in reference to product smart component 

### Time Permitting
1. Using what we learned back in the Modules section, create a Product Feature Module
