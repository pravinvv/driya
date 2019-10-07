import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.component.html",
  styleUrls: ["./register-form.component.css"]
})
export class RegisterFormComponent implements OnInit {
  rform: FormGroup;

  message;

  constructor(private fb: FormBuilder, private reg: UserService) {}

  ngOnInit() {
    this.rform = this.fb.group({
      name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ])
      ],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      mobile: [
        "",
        Validators.compose([Validators.required, Validators.minLength(10)])
      ],
      password: ["", Validators.compose([Validators.required])],
      confirmpassword: ["", Validators.compose([Validators.required])]
    });
  }

  register() {
    console.log(this.rform);
    this.reg.register(this.rform.value);
    alert("Registered Succesfull");
  }

  get f() {
    return this.rform.controls;
  }
}
