# DataBinding Part 3 Solution

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Solution Steps
### Display Products as an Array of Products
1. Modify the product.model to include an id: number property
1. In the AppComponent, define and initalize products: Product[] with your products
	* Assign an id starting with 1 and incrementing by 1
1. In the AppComponent, remove the definition for selectedComponent and any references
1. In the AppComponent HTML, remove the unordered list and put in an *ngFor to display the products
	* In the microsyntax, use the trackBy and define the method it calls to get the idetifier
	* Use a similar display as previously, but define the [class.selected]="productDetails.id === product.id"

### Conditionally Display Input Fields
1. Modify div around the Product Detail to conditionally display using an *ngIf based upon productDetails not being undefined || null
1. Remove the initalization of the productDetails
1. Clicking the product name will set the productDetails and based upon our *ngIf will display the product details fields
1. Modify the cancelClickHandler to set the productDetails to null
	* Currently, clicking the cancel button will set the productDetails object to an empty object which is not undefined || null. 
1. The save button only displays console data. Hide the fields upon clicking save the same way we hide them when clicking cancel.
1. Create and style as you see fit a new button "CREATE NEW PRODUCT"	
	* Bind a click event to a newProductClickHandler method
	* Within this method, set productDetails to an empty object

### Saving a New Product
1. In the saveClickHandler, put in some validation of the fields
	* **NOTE:** A better way of this validation will be shown in FORMS
1. Determine if this is a new product
	* If new product, set the id to the products.length + 1, and concat it to the current product list
	* If existing, find the index and assign the update that product
