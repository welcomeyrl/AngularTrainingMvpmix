# Template Forms Solution

## Prerequisites
1. **[Angular CLI Installed](https://github.com/angular/angular-cli#installation)**
1. Clone the solution to NetCoreAPI

## Setup and Run Angular Code
1. Setup the application: `npm install`
1. Run the application: `npm run start`

## Setup and Run .Net Core API
1. From the command prompt run the following dotnet cli commands
1. dotnet restore
1. dotnet build
1. dotnet run

## Objective
   * Be able to setup an Angular Form and submit forms
   * Be able to utilize the ngModel with forms
   * Be able to create an Angular Validator
   
## Need to Know
  * Will be using [http://localhost:4200/Products/Details](http://localhost:4200/Products/Details) and [http://localhost:4200/Products/Details/1](http://localhost:4200/Products/Details/1) for the duration of this problem

## PreSetup
  * Created a Shared Module
    * Moved FormsModule from Products Module to SharedModule (imported and exported)
    * Imported SharedModule into ProductsModule   
   
## Solution Steps
### Template Forms
  * **NOTE:** FormsModule has already been imported
  * In the product-details.component.html, change the topmost _div_ tag to a _form_ tag
    * There is nothing special about this form tag other than it is just a normal HTML form tag
  * Add a name attribute to all of our input tags
  * Define the form as angular : `#productDetailsForm="ngForm"`
     
### Required Fields/ngModel CSS
  * In the product-details.component.html, create a template reference on one of the input fields
    ```angular2html
    <input type="text" class="form-control" name="name" #detailsName required [(ngModel)]="item.name"/>
    ```
  * Create an interpolation somewhere and use the detailsName template reference to display the className property
    ```angular2html
    <div class="row">
      <div class="col-md-6">
        {{detailsName.className}}
      </div>
    </div>
    ```
    * Click around, type, and watch the classes change (ng-untouched/ng-touched, ng-pristine/ng-dirty, ng-invalid/ng-valid)
    * Currently these classes are used to set the border to red in the product-details.component.css
      ```css
      .product-details .form-control.ng-invalid {
        border-color: red; }
      ```
  * Make the HTML label red as well without using CSS
    * Allow the template reference to access the Angular control by setting _ngModel_ to it
      ```angular2html
      #detailsName="ngModel"
      ```
    * On the HTML label, set a class binding to invalid if the template reference is invalid
      ```angular2html
      [class.invalid]="detailsName.invalid"
      ```
    * Update product-details.component.css to set the label.invalid color to red
      ```css
      .product-details .control-label.invalid {
        color: red; }
      ```
     
### Validators
  * Built-in Validators (Currently using the built-in _required_ validator)
    * In addition to the CSS currently being used, show a block reason of why it is invalid
    * In the product-details.component.html, directly below the name input add in a _div_ that will conditionally display (use the template reference like you did when binding the label to a class)
      * Only display the validation message when the control is invalid
      * Also, don't display the message immediately. Display if the control has been touched or is dirty along with invalid
      * Use the bootstrap classes _alert_ and _alert-danger_ 
      * Add some text..."Invalid field"
        ```angular2html
        <div *ngIf="detailsName.invalid && (detailsName.touched || detailsName.dirty)" class="alert alert-danger">
            Invalid field.
        </div>
        ```
    * Put in more specific errors, but how to differentiate between possible errors
      * Instead of the text, find out what the errors are. Use interpolation to look at the errors property. Also, so that the value doesn't show up as [object Object], use the [JsonPipe](https://angular.io/api/common/JsonPipe) to be able to display the object definition.  
        ```angular2html
        {{ variable.errors | json }}
        ```
      * To setup specific text for a required error, wrap the error text in div tag then use an *ngIf to determine if it is the correct error type
        ```angular2html
        <div *ngIf="detailsName.invalid && (detailsName.touched || detailsName.dirty)" class="alert alert-danger">
          <div *ngIf="detailsName.errors.required">
            Name is required.
          </div>
        </div>
        ```
      * Could also be written this way
        ```angular2html
        <div *ngIf="detailsName.invalid && (detailsName.touched || detailsName.dirty)" class="alert alert-danger">
          <div *ngIf="detailsName.errors['required']">
            Name is required.
          </div>
        </div>
        ```
  * Custom Validators : Create a custom validator so that the name field does not start with a number character
    * Create an Angular _Directive_ which implements a _Validator_
      * Create nonumberstostart.directive in the shared/validators folder
      * In the SharedModule, declare the directive and export it so it can be used by other modules
    	* Set the selector to "[noNumbersToStart]"
    	  * **NOTE: ** This is a typical format of the directive, especially attribute directives
    	* Register the directive with the NG_VALIDATORS provider, with using this directive as an existing class and set to multi since there can be be more than one provider
        ```angular2html
        providers: [{provide: NG_VALIDATORS, useExisting: NoNumbersToStartDirective, multi: true}]
        ```
      * The directive class takes an Input property which in this case is the same name as the selector
        * **NOTE** To understand why read the following: [https://angular.io/guide/attribute-directives#pass-values-into-the-directive-with-an-input-data-binding](https://angular.io/guide/attribute-directives#pass-values-into-the-directive-with-an-input-data-binding)
      * The directive class implements Validator, which will then require a validate method
        ```angular2html
        validate(control: AbstractControl): {[key: string]: any}
        ```        
        * The return value is a key, value combination with the key being the name of the error property and the value being anything that would be needed in displaying data or figuring out what is wanted to display
        * If the validate method wil not cause an error, a null is returned
      * In the product-details.component.html, set specific text for this custom validator error
        ```angular2html
        <div *ngIf="detailsName.errors['noNumbersToStart']">
          Name cannot start with a number.
        </div>
        ```
    * Implement a Validator Function
      * Create nonumberstostart.validator in the shared/validators folder
    	* In nonumberstostart.validator, export a function which returns a ValidatorFn
    	* Move the validation logic from the directive and put it in here. Same goes for the return value
    	* Modify the directive to call the validator, but because the validator returns a function expecting an AbstractControl, the control must then be passed in. `noNumbersToStartValidator()(control)`
          ```angular2html
          export function noNumbersToStartValidator(): ValidatorFn {
            return (control: AbstractControl): {[key: string]: any} => {
              const noStartingNumbersRegex: RegExp = new RegExp('^[0-9]+', 'i');
              const startsWithNumber: boolean = noStartingNumbersRegex.test(control.value);
          
              return startsWithNumber ? {'noNumbersToStart': {value: control.value}} : null;
            };
          }
          ```    	
    		    
### Utilizing Angular Forms
  * Disable Save Button when form is invalid
    * Using the Angular form reference created earlier, property bind the save buttons disabled property to whether the form is invalid or not
  * Submit through ngSubmit 
    * On the form tag, event bind _ngSubmit_ event to the current save click handler
    * Modify the save button to be of type _submit_ and remove the current click event and template statement
  * In the ProductDetailsComponent class, remove the validation check in the saveProductHandler
