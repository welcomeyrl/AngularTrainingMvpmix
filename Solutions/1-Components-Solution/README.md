# Components Solution

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**

## Setup and Run	
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Solution Steps
1. Create nav directory
2. Create navbar.component.ts file
3. Create navbar.component.html file
4. Create navbar.component.css file
5. In the navbar.component.ts file:
	* Set the selector to nav-bar
	* Set the templateUrl to a relative path to the associated html file
	* Set the styleUrls to an array of a single entry. This entry is a relative path to the associated css file
	* Generate the NavBarComponent class and set it to be exported
6. In the navbar.component.html file:
	* Set the HTML using bootstrap styles
7. Add the NavBarComponent to the AppModule Declarations
8. In the app.component.html
	* Removed the existing html
	* Added in the reference to the NavBarComponent using an html tag of the NavBarComponent selector
	* Added in the HTML for a container with Product List of candy
9. In the app.component.css
	* style the products list and its container
10. In the navbar.component.css
	* style the nav bar the way I was envisioning it at the time

