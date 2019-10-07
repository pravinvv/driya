import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-changepassword",
  templateUrl: "./changepassword.component.html",
  styleUrls: ["./changepassword.component.css"]
})
export class ChangepasswordComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  frm: FormGroup;

  ngOnInit() {
    this.frm = this.fb.group({
      ppass: ["", Validators.required],
      npass: ["", Validators.required],
      rpass: ["", Validators.required]
    });
  }
  flag;
  update() {
    //  this.reg.sturegister(this.frm.value);
  }
}
