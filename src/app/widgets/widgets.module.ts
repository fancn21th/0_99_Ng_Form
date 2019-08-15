import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormOneComponent } from "./form-one/form-one.component";
import { FormsModule } from "@angular/forms";
import { FormTwoComponent } from "./form-two/form-two.component";
@NgModule({
  declarations: [FormOneComponent, FormTwoComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormOneComponent, FormTwoComponent]
})
export class WidgetsModule {}
