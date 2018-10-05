import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { SecureRoutingModule } from "./secure-routing.module";
import { SecureComponent } from "./secure.component";

@NgModule({
    imports: [
        NativeScriptModule,
        SecureRoutingModule
    ],
    declarations: [
        SecureComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SecureModule { }
