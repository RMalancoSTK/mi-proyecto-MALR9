import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputDataComponentComponent } from './input-data-component/input-data-component.component';

@NgModule({
  declarations: [InputDataComponentComponent],
  imports: [FormsModule],
  exports: [InputDataComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
})
export class SharedModule {}
