import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import * as Validator from "email-validator";
import { Validators, FormBuilder} from "@angular/forms";
import { RouterExtensions } from "nativescript-angular/router";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "~/app/http/http.service";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "register", loadChildren: "./register/register.module#RegisterModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Register",
    moduleId: module.id,
    templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {

    public registerData: any;
    status: any;

    constructor(private location: Location, private router: RouterExtensions, public http: HttpClient, public hs: HttpService) {
        this.registerData = {
            "name": "",
            "hp": "",
            "username": "",
            "email": "",
            "password": "",
            "password_confirmation": ""
        }
    }

    isValidEmail() {
        return Validator.validate(this.registerData.email);
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSignupWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    register(): void {
        console.log(this.registerData);
        if(this.registerData.name && this.registerData.hp && this.registerData.username && this.registerData.email && this.registerData.password && this.registerData.password_confirmation) {
            if(this.isValidEmail()){
                console.log(this.registerData);

                this.hs.httppost("register", this.registerData).then((data: any) => {
                    console.log(data);
                    if (data.message == "Success Register"){
                        ApplicationSettings.setBoolean("authenticated", true);
                        this.router.navigate(["/secure"], { clearHistory: true });
                    } else {
                        (new SnackBar()).simple("Unable to Register");
                    }

                });
            }
        } 
        else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }

    validate(){
        // name: ['', validator.required],
        // email: ['', validator.compose([Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/), Validators.required])],
        // code: ['', Validators.required],
        // mobile: ['', Validators.compose([Validators.pattern(/^[0-9]{8,12}$/), Validators.required])],
        // password: ['', Validators.compose([Validators.pattern(/(?=[^\s]{8,}$)/), Validators.required])],
    
    }

    public goBack() {
        this.location.back();
    }
}

