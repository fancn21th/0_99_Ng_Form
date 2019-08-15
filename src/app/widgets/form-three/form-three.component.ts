import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-three",
  templateUrl: "./form-three.component.html",
  styleUrls: ["./form-three.component.css"]
})
export class FormThreeComponent implements OnInit {
  username = "alex fan";

  constructor() {}

  ngOnInit() {}

  onSubmit(formValue) {
    console.log(formValue);
  }
}
