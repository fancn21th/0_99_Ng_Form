import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormOneComponent } from "./form-one/form-one.component";

@NgModule({
  declarations: [FormOneComponent],
  imports: [CommonModule],
  exports: [FormOneComponent]
})
export class WidgetsModule {}
