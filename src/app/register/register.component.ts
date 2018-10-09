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
import { EventData } from "tns-core-modules/ui/page/page";

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

        // this.registerData = this.fb.group({
        //     name : [null, Validators.required],
        //     hp : [null, Validators.compose([Validators.required, Validators.minLength(10)])],
        //     username: [null, Validators.required],
        //     email : ['', Validators.compose([Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/), Validators.required])],
        //     password : [null, Validators.required],
        //     password_confirmation : [null, Validators.required],
        // })
    }

    isValidEmail() {
        return Validator.validate(this.registerData.value.email);
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

        console.log(this.regData);
        if(this.isValidEmail()) {

            this.hs.httppost("register", this.regData).then((data: any) => {
                console.log(data);
                if (data.message == "Success Register"){
                    ApplicationSettings.setBoolean("authenticated", true);
                    this.router.navigate(["/secure"], { clearHistory: true });
                } else {
                    (new SnackBar()).simple("Unable to Register");
                }

            });
        } 
        else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }

    passConfirm(){
        return true;
    }

    public goBack() {
        this.location.back();
    }
}

