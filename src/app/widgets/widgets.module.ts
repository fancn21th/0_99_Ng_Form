import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormOneComponent } from "./form-one/form-one.component";
import { FormsModule } from "@angular/forms";
import { FormTwoComponent } from "./form-two/form-two.component";
import { FormThreeComponent } from "./form-three/form-three.component";
@NgModule({
  declarations: [FormOneComponent, FormTwoComponent, FormThreeComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormOneComponent, FormTwoComponent, FormThreeComponent]
})
export class WidgetsModule {}
