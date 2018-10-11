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
var http_1 = require("@angular/http");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var secure_component_1 = require("./secure/secure.component");
var http_2 = require("@angular/common/http");
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
                http_2.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUNwRiwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLGdFQUFnRjtBQUNoRix3Q0FBa0U7QUFDbEUsb0RBQXFFO0FBQ3JFLHNDQUEyQztBQUMzQywyREFBeUQ7QUFDekQsb0VBQWtFO0FBQ2xFLDhEQUE0RDtBQUM1RCw2Q0FBd0Q7QUFDeEQsb0RBQWtEO0FBQ2xELDJFQUF5RTtBQUN6RSw0REFBMEQ7QUFDMUQsdUVBQW9GO0FBbUNwRjtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBakNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7YUFDZDtZQUVELFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFDQUFnQjtnQkFDaEIsd0NBQWtCO2dCQUNsQix3Q0FBOEI7Z0JBQzlCLDBDQUE0QjtnQkFDNUIsdUJBQWdCO2dCQUNoQixtQkFBVztnQkFDWCwyQkFBbUI7Z0JBQ25CLGlCQUFVO2dCQUNWLCtCQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxzQ0FBaUI7Z0JBQ2pCLGtDQUFlO2dCQUNmLHdDQUFrQjtnQkFDbEIsOEJBQWE7Z0JBQ2IsMkNBQWtCO2dCQUNsQix5Q0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VjdXJlQ29tcG9uZW50IH0gZnJvbSBcIi4vc2VjdXJlL3NlY3VyZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gXCIuL2h0dHAvaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwifi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWluTGVuZ3RoRGlyZWN0aXZlLCBJc0VtYWlsRGlyZWN0aXZlIH0gZnJvbSBcIn4vYXBwL3ZlcmlmaWNhdGlvbi5kaXJlY3RpdmVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSHR0cFNlcnZpY2VcbiAgICBdLFxuXG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBTZWN1cmVDb21wb25lbnQsXG4gICAgICAgIERhc2hib2FyZENvbXBvbmVudCxcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcbiAgICAgICAgTWluTGVuZ3RoRGlyZWN0aXZlLFxuICAgICAgICBJc0VtYWlsRGlyZWN0aXZlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==