"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var http_client_1 = require("nativescript-angular/http-client");
var forms_1 = require("@angular/forms");
var forms_2 = require("nativescript-angular/forms");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var secure_component_1 = require("./secure/secure.component");
var http_service_1 = require("./http/http.service");
var dashboard_component_1 = require("~/app/dashboard/dashboard.component");
var home_component_1 = require("~/app/home/home.component");
var verification_directive_1 = require("~/app/verification.directive");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                http_service_1.HttpService
            ],
            bootstrap: [
                app_component_1.AppComponent,
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUISideDrawerModule,
                http_client_1.NativeScriptHttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                forms_2.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                secure_component_1.SecureComponent,
                dashboard_component_1.DashboardComponent,
                home_component_1.HomeComponent,
                verification_directive_1.MinLengthDirective,
                verification_directive_1.IsEmailDirective
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUNwRiwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLGdFQUFnRjtBQUNoRix3Q0FBa0U7QUFDbEUsb0RBQXFFO0FBRXJFLDJEQUF5RDtBQUN6RCxvRUFBa0U7QUFDbEUsOERBQTREO0FBRTVELG9EQUFrRDtBQUNsRCwyRUFBeUU7QUFDekUsNERBQTBEO0FBQzFELHVFQUFvRjtBQWlDcEY7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQS9CckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2FBQ2Q7WUFFRCxTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCxxQ0FBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsd0NBQThCO2dCQUM5QiwwQ0FBNEI7Z0JBQzVCLG1CQUFXO2dCQUNYLDJCQUFtQjtnQkFDbkIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHNDQUFpQjtnQkFDakIsa0NBQWU7Z0JBQ2Ysd0NBQWtCO2dCQUNsQiw4QkFBYTtnQkFDYiwyQ0FBa0I7Z0JBQ2xCLHlDQUFnQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWN1cmVDb21wb25lbnQgfSBmcm9tIFwiLi9zZWN1cmUvc2VjdXJlLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gXCIuL2h0dHAvaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWluTGVuZ3RoRGlyZWN0aXZlLCBJc0VtYWlsRGlyZWN0aXZlIH0gZnJvbSBcIn4vYXBwL3ZlcmlmaWNhdGlvbi5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSHR0cFNlcnZpY2VcbiAgICBdLFxuXG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBTZWN1cmVDb21wb25lbnQsXG4gICAgICAgIERhc2hib2FyZENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgTWluTGVuZ3RoRGlyZWN0aXZlLFxuICAgICAgICBJc0VtYWlsRGlyZWN0aXZlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==