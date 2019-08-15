import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { WidgetsModule } from "./widgets/widgets.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, WidgetsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
