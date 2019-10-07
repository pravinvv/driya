import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  frm: FormGroup;

  ngOnInit() {
    this.frm = this.fb.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      address: ["", Validators.required],
      mobile: [
        "",
        Validators.compose([
          Validators.pattern[0 - 9],
          Validators.maxLength(10)
        ])
      ],
      email: ["", Validators.required]
    });
  }
  flag;
  update() {
    //  this.reg.sturegister(this.frm.value);
  }
}
