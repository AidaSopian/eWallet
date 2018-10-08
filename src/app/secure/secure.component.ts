import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";
import * as localStorage from 'nativescript-localstorage';

@Component({
    moduleId: module.id,
    selector: "ns-secure",
    templateUrl: "secure.component.html",
})
export class SecureComponent implements OnInit {

    public constructor(private router: RouterExtensions) { }

    public ngOnInit() {
        if(!ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/login"], { clearHistory: true });
        }
        
        if(ApplicationSettings.getBoolean("authenticated", true)) {
            this.router.navigate(["/dashboard"], { clearHistory: true });
        }
    }

    public logout() {
        ApplicationSettings.remove("authenticated");
        localStorage.setItem('user_token', "");
        this.router.navigate(["/login"], { clearHistory: true });
    }

}