import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "~/app/http/http.service";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "login", loadChildren: "./login/login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    // email: string;
    // password: string;
    public loginData: any;
    token: string;

    constructor(public router: RouterExtensions, public http: HttpClient, public hs: HttpService) {
        this.loginData = {
            "username": "",
            "password": ""
        }
    }

    ngOnInit(): void {
        if(ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/secure"], { clearHistory: true });
        }
    }

    onLoginWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For log in with social provider you can add your custom logic or
        * use NativeScript plugin for log in with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    login(): void {
        if(this.loginData.username && this.loginData.password) {

            //this.hs.httppost("login", this.loginData);

            this.hs.httppost("login", this.loginData).then((data: any) => {
                console.log(data);
                if (data.message == "Success Login"){
                    this.token = data.token; 
                    ApplicationSettings.setBoolean("authenticated", true);
                    this.router.navigate(["/secure"], { clearHistory: true });
                } else {
                    (new SnackBar()).simple("incorrect username or password");
                }
            });

        } else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }

    onForgotPasswordTap(): void {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    }
}