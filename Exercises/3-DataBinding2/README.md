# DataBinding Part 2 Problem

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Problem Steps
1. Alter the input fields you previously generated, so that they support two-way binding and are required
1. Create two buttons (Save and Cancel)
	* Save: Will write to the console the new product object and it’s properties. 
	* Cancel: clears all the input fields
1. Styling
	* If a product name is clicked (aka “edit” mode), then change the color and font-weight of that product name to blue and bold
		* Try using some of the different ways to set a class and styles
		* If you are using a class, don't forget to update the app.component.css
	* If a field is empty, outline the input field in red, but do not use class or style binding
		* **HINT:** Create a reference variable #prodcuctInfo and on a different line do `<p>{{productInfo.className}}</p>`
		* Notice the **_ng-invalid_** as you type and as the field is empty. These are class names that Angular automatically sets when ngModel is used
				If you are not seeing some of these class names, you possibly forgot to set your input field to required.
