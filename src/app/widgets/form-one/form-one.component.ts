import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-one",
  templateUrl: "./form-one.component.html",
  styleUrls: ["./form-one.component.css"]
})
export class FormOneComponent implements OnInit {
  username: string = "alex fan";
  constructor() {}
  ngOnInit() {}
}
