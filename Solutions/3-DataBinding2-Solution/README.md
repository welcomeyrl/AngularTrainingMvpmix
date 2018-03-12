# DataBinding Part 2 Solution

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Solution Steps
### Altering the Input Fields
1. Removed the value property binding and converted it to _[(ngModel)]_
1. Removed the _readonly_ and made it _required_
1. Removed the _?_ 
1. Imported the _FormsModule_ to the AppModule
1. Defined a _productDetails_ variable and initialized it to be a new Product
1. Modified the product details input controls to two way bind from _productDetails_ properties
1. Modified the _productClickHandler_ to set the clicked product to both _selectedProduct_ and _productDetails_

### Two New Buttons
1. Create a SAVE and a CANCEL button (type=button) HTML
1. On the save button bind a _click_ event to a _saveClickHandler_
1. Within the _saveClickHandler_, just display the productDetails to the console using console.log
1. On the cancel button bind a _click_ event to a _cancelClickHandler_
1. Within the _cancelClickHandler_, set the selectedProduct and productDetails back to their default values

### Styling
1. On the different _li_ tags, use a different technique to set styles
```angular2html
[class.selected]="selectedProduct?.name === 'Twix'"
```
```angular2html
[class.selected]="isSelectedProduct('Snickers')"
```
```angular2html
[ngClass]="{'selected': selectedProduct?.name === 'M&Ms'}"
```
```angular2html
[style.color]="isSelectedProduct('Gum') ? 'blue' : null" [style.font-weight]="isSelectedProduct('Gum') ? 'bold' : 'normal'"
```
\***NOTE:** for the css class, add the style to the app.component.css 
2. If you put in the _p_ tag and watched as you typed and removed all the text, you noticed that ng-invalid appeared when the fields were empty
1. Add a style to the app.component.css for when .ng-invalid (Yep, it's that easy)
