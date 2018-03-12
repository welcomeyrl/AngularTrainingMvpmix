# DataBinding Part 1 Problem

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Problem Steps
1. Below your list of products, create a new section with a label and input for the following:
	* Product Name
	* Product Description
	* Product Price
1. On each of your products, add a click event binding.
	* The click event should bind to a productClickHandler passing in a user defined object with the properties
		* name
		* description
		* price
1. In the component class, create the productClickHandler function which takes in the product object
1. Assign the product object to a class component product object
1. Use property binding to bind the appropriate product property to the value of each input
