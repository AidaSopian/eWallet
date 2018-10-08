// import { NgModule } from "@angular/core";
// import { Routes } from "@angular/router";
// import { NativeScriptRouterModule } from "nativescript-angular/router";

// const routes: Routes = [
//     { path: "", redirectTo: "/home", pathMatch: "full" },
//     { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
//     { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
//     { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
//     { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
//     { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
//     { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
//     { path: "register", loadChildren: "~/app/register/register.module#RegisterModule" },
//     { path: "secure", loadChildren: "~/app/secure/secure.module#SecureModule" }
// ];

// @NgModule({
//     imports: [NativeScriptRouterModule.forRoot(routes)],
//     exports: [NativeScriptRouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SecureComponent } from "./secure/secure.component";
import { HomeComponent } from "~/app/home/home.component";
import { DashboardComponent } from "~/app/dashboard/dashboard.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "secure", component: SecureComponent },
    { path: "dashboard", component: DashboardComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
