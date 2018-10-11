import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
//import { HttpClient } from "@angular/common/http";
import { HttpService } from "~/app/http/http.service";
import * as localStorage from 'nativescript-localstorage';


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

    constructor(public router: RouterExtensions, public hs: HttpService) {
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
        console.log(this.loginData);
        if(this.loginData.username && this.loginData.password) {
            let requestBody = new FormData();
            requestBody.append("username", this.loginData.username);
            requestBody.append("password", this.loginData.password);
  
            this.hs.posthttp("login",requestBody ).then((data: any) => {
                console.log(data);
                if (data.message == "Success Login"){
                    // localStorage.setItem('username', data.username);
                    // localStorage.setItem('user_pass', data.password)
                    ApplicationSettings.setBoolean("authenticated", true);
                    localStorage.setItem('user_token', data.token);

                    this.router.navigate(["/secure"]);
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