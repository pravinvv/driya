import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}

  getUsers() {
    return {
      name: localStorage.getItem("name"),
      mobile: localStorage.getItem("mobile"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
      confirmpassword: localStorage.getItem("confirmpassword")
    };
  }

  register(user) {
    localStorage.setItem("name", user.name);
    localStorage.setItem("email", user.email);
    localStorage.setItem("mobile", user.mobile);
    localStorage.setItem("password", user.password);
    localStorage.setItem("confirmpassword", user.confirmpassword);
  }
}
