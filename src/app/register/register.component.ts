import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import * as Validator from "email-validator";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RouterExtensions } from "nativescript-angular/router";
import { HttpClient } from "@angular/common/http";
import { HttpService } from "~/app/http/http.service";

@Component({
    selector: "Register",
    moduleId: module.id,
    templateUrl: "./register.component.html"
})
export class RegisterComponent implements OnInit {

    registerData: any;
    status: any;
    regData: any;

    constructor(
        private location: Location, 
        private router: RouterExtensions, 
        public http: HttpClient, 
        public hs: HttpService, 
        private fb: FormBuilder
        ) {
        this.registerData = {
            "name": "",
            "hp": "",
            "username": "",
            "email": "",
            "password": "",
            "password_confirmation": "",
        }
    }

    isValidEmail() {
        return Validator.validate(this.registerData.value.email);
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    onSignupWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    passConfirm(pass, cfmPass){
        if(cfmPass === pass){
            return true;
        } else { return false };
    }

    register(): void {
        console.log(this.regData);
        let requestBody = new FormData();
        requestBody.append("name", this.registerData.name);
        requestBody.append("hp", this.registerData.hp);
        requestBody.append("username", this.registerData.username);
        requestBody.append("email", this.registerData.email);
        requestBody.append("password", this.registerData.password);
        requestBody.append("password_confirmation", this.registerData.password_confirmation);

        this.hs.posthttp("login", requestBody).then((data: any) => {
            console.log(data);
            if (data.message == "Success Register"){
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/secure"], { clearHistory: true });
            } else {
                (new SnackBar()).simple("Unable to Register");
            }

        });
    }

    public goBack() {
        this.location.back();
    }
}

