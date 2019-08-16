import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormOneComponent } from "./form-one/form-one.component";
import { FormsModule } from "@angular/forms";
import { FormTwoComponent } from "./form-two/form-two.component";
import { FormThreeComponent } from "./form-three/form-three.component";
import { FormFourComponent } from "./form-four/form-four.component";
import { FormFiveComponent } from './form-five/form-five.component';
@NgModule({
  declarations: [
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent,
    FormFourComponent,
    FormFiveComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FormOneComponent,
    FormTwoComponent,
    FormThreeComponent,
    FormFourComponent,
    FormFiveComponent
  ]
})
export class WidgetsModule {}
