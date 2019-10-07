import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { UserControlPanelComponent } from "../component/user-control-panel/user-control-panel.component";

import { UserDashboardComponent } from "../component/user-dashboard/user-dashboard.component";

import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "../component/profile/profile.component";
import { ChangepasswordComponent } from "../component/changepassword/changepassword.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { UserListComponent } from '../component/user-list/user-list.component';

@NgModule({
  declarations: [
    UserControlPanelComponent,
    UserListComponent,
    UserDashboardComponent,
    ProfileComponent,
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UserModule {}
