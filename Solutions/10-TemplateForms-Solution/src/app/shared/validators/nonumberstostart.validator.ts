import { AbstractControl, ValidatorFn } from '@angular/forms';

export function noNumbersToStartValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const noStartingNumbersRegex: RegExp = new RegExp('^[0-9]+', 'i');
    const startsWithNumber: boolean = noStartingNumbersRegex.test(control.value);

    return startsWithNumber ? {'noNumbersToStart': {value: control.value}} : null;
  };
}
