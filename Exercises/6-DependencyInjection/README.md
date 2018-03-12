# Dependency Injection Problem

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Problem Steps
1. Create a ProductService that can be injected.
	* **NOTE** For this task, move the array of products definition into this service from the products.component
	* Create a method to be able to getAll products
	* Create a method to be able to get a single product by id
	* Create a method to be able to save a new or update an existing product
1. Setup ProductsComponent to use ProductService
	* Use the OnInit LifeCycle event
	* Refactor handlers to be able to retrieve, post, update data from the service
