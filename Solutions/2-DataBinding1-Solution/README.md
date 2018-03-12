# DataBinding Part 1 Solution

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Solution Steps
1. Add in HTML Elements (label and input marked readonly) for
	* Name
	* Description
	* Price
1. Add a product.model TypeScript class
``` typescript
    export class Product {
      name: string;
      description: string;
      price: number;
    }
```
	
3. In the class component, define a selectedProduct variable of type Product
1. Add a click event to each product. 
1. Specify the click event should call method productClickHandler
1. In each productClickHandler call, pass in a json object {name:string, description:string, price:number} which maps to a Product object
1. Map the method argument and assign to the selectedProduct variable
1. On each input, property bind the value target to the correct selectedProduct property
	* Hint: Since selectedProduct isn't initialized, add in a ? which will guard against null and undefined values
```angular2html
    [value]="selectedProduct?.name"
```
9. Style as you feel appropriate
