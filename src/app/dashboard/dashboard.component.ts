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
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard-common.css"],
})
export class DashboardComponent implements OnInit {
    private userDetails = Array();
    constructor(private router: RouterExtensions, private hs: HttpService) {

    }

    ngOnInit() {
        let token = localStorage.getItem("user_token");
        let url_id = "profile?token=";
        let token_url = url_id.concat(token);
        
        this.hs.gethttp(token_url)
            .then((res) => {
            //console.log("dasboard" ,res);

        }, err =>{
            console.log(err);
        });
    }

    public logout() {
        ApplicationSettings.remove("authenticated");
        localStorage.setItem('user_token', "");
        this.router.navigate(["/login"], { clearHistory: true });
    }
}


