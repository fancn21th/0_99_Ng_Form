import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-four",
  templateUrl: "./form-four.component.html",
  styleUrls: ["./form-four.component.css"]
})
export class FormFourComponent implements OnInit {
  locations: string[] = ["Home", "Away", "Space"];
  selectedLocation: null;

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.selectedLocation = null;
  }
}
