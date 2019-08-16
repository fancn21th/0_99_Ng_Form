import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-five",
  templateUrl: "./form-five.component.html",
  styleUrls: ["./form-five.component.css"]
})
export class FormFiveComponent implements OnInit {
  locations: string[] = ["Home", "Away", "Space", "Ocean"];

  constructor() {}

  ngOnInit() {}
}
