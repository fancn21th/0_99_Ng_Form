import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-form-three",
  templateUrl: "./form-three.component.html",
  styleUrls: ["./form-three.component.css"]
})
export class FormThreeComponent implements OnInit {
  @ViewChild("formRef", { static: false }) form;

  username = "alex fan";

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(v => console.table(v));
    this.form.statusChanges.subscribe(v => console.table(v));
  }

  onSubmit(formValue) {
    console.log(formValue);
  }
}
