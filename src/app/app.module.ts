import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { HttpModule } from "@angular/http";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SecureComponent } from "./secure/secure.component";
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from "./http/http.service";
import { DashboardComponent } from "~/app/dashboard/dashboard.component";
import { HomeComponent } from "~/app/home/home.component";
import { MinLengthDirective, IsEmailDirective } from "~/app/verification.directive";

@NgModule({
    providers: [
        HttpService
    ],

    bootstrap: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        SecureComponent,
        DashboardComponent,
        HomeComponent,
        MinLengthDirective,
        IsEmailDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
