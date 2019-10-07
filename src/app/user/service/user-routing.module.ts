import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserControlPanelComponent } from "../component/user-control-panel/user-control-panel.component";
import { UserDashboardComponent } from "../component/user-dashboard/user-dashboard.component";
import { ProfileComponent } from "../component/profile/profile.component";
import { ChangepasswordComponent } from "../component/changepassword/changepassword.component";
import { UserListComponent } from "../component/user-list/user-list.component";

const routes: Routes = [
  {
    path: "",
    component: UserControlPanelComponent,
    children: [
      { path: "dashboard", component: UserDashboardComponent },
      { path: "user", component: UserListComponent },
      { path: "profile", component: ProfileComponent },
      { path: "changepassword", component: ChangepasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
