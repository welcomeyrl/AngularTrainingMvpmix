import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoNumbersToStartDirective } from './validators/nonumberstostart.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    NoNumbersToStartDirective
  ],
  declarations: [
    NoNumbersToStartDirective
  ],
  providers: []
})
export class SharedModule {}
