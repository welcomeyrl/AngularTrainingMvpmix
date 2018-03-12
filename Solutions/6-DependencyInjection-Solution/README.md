# Dependency Injection Solution

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Solution Steps
### Create ProductService
1. Create a product.service, initialize it, and decorate it with @Injectable
	* For how we are going to use the service the @Injectable decorator is not required, but it is a best practice and good habit to get used to
1. Register the ProductService at only the products injector
	* In the products.component, set the providers array to have a ProducutService providers
	* **NOTE** You might think to register the ProductService at the ProductModule, and yes, you easily could. But since this is trying to help you understand knowledge, it is good to know the difference of the different levels of injectors. Registering the service in the ProductModule would still register it within the app injector. Registering the service within the ProductsComponent, would register the token within the Products injector.
1. In product.service, define and initalize the array of products currently being used in products.component
1. In product.service, create a getAll method with returns the list of products sorted by name
1. In product.service, create a get method which takes an id and returns the product with that id
1. In product.service, create a save method which takes a product
	* If product.id doesn't exist, then add to the list of productts
	* If product.id does exist, update the list of products by finding the product with the correct id	

### ProductsComponent should use ProductsService
1. In the products.component constructor, delcare the ProductService dependency
1. In the products.component implement the OnInit LifeCycle event
	* Class should `implements OnInit`
	* Define **ngOnInit** method
1. In the products.component, call the appropriate ProductService methods
	* ngOnInit should call an internal component class method to getAll from the service
	* onSelectHandler should call prodctService.get
	* onSaveHandler should still validate, but should also call productService.save
