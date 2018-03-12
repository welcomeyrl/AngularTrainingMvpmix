import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { noNumbersToStartValidator } from './nonumberstostart.validator';

@Directive({
  selector: '[noNumbersToStart]',
  providers: [{provide: NG_VALIDATORS, useExisting: NoNumbersToStartDirective, multi: true}]
})
export class NoNumbersToStartDirective implements Validator {
  @Input() noNumbersToStart: any;

  validate(control: AbstractControl): {[key: string]: any} {
    const performCheck: boolean = this.noNumbersToStart === undefined || this.noNumbersToStart === '' || this.noNumbersToStart === true;
    return performCheck ? noNumbersToStartValidator()(control) : null;
  }
}
