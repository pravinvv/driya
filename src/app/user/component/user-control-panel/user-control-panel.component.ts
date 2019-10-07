import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-user-control-panel",
  templateUrl: "./user-control-panel.component.html",
  styleUrls: ["./user-control-panel.component.css"]
})
export class UserControlPanelComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: Router
  ) {}
  // signOut(event) {
  //   console.log(event);
  //   this.route.["/login"];
  // }
}
