import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-two",
  templateUrl: "./form-two.component.html",
  styleUrls: ["./form-two.component.css"]
})
export class FormTwoComponent implements OnInit {
  username: string = "sky fan";
  constructor() {}

  ngOnInit() {}
}
