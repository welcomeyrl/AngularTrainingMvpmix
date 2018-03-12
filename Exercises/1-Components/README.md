# Components Problem

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.5.

## Bootstrap
##### 1. Bootstrap 3.3.7 has been added using its CDN link in the index.html file

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Problem Steps
1. Clear the HTML in the current AppComponent template
2. Create a NavBarComponent
	* Create a new TypeScript class **nav.component.ts**
	* Import the Component class from **@angular/core**
	* Declare the **@Component** decorator and a blank configuration object **{}**
	* Set the **selector** property to be app-nav-bar
	* Define the **template** or **templateUrl** property
	* Create the exported class **NavBarComponent**
3. Reference the new component in the AppComponent template
	* Add the HTML **<app-nav-bar</app-nav-bar>**
	* **NOTE:** In order for the AppComponent template to be able to recognize the NavBarComponent selector, the NavBarComponent needs to be declared in the AppModule
4. Add a list of products in the AppComponent template
5. Style both the navbar component and the product list
	* Set the **styles** or **styleUrls** property in the NavBarComponent
	* Add styles to app.component.css for the product list

