import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import { HttpService } from "~/app/http/http.service";
import * as localStorage from 'nativescript-localstorage';

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Dashboard",
    moduleId: module.id,
    templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
    constructor(private router: RouterExtensions, private hs: HttpService) {

    }

    ngOnInit(): void {
        let token = localStorage.getItem("user_token");
        this.hs.httpget("profile?token=", token).subscribe(res => {
            console.log(res);
        });
    }

    public logout() {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/login"], { clearHistory: true });
    }
}
