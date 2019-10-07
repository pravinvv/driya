import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },

  { path: "register-form", component: RegisterFormComponent },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "user",
    loadChildren: () =>
      import("./user/service/user.module").then(mod => mod.UserModule)
  },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
