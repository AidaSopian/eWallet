"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
//import * as Validator from "email-validator";
var forms_1 = require("@angular/forms");
var router_1 = require("nativescript-angular/router");
var http_1 = require("@angular/common/http");
var http_service_1 = require("~/app/http/http.service");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "register", loadChildren: "./register/register.module#RegisterModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(location, router, http, hs, fb) {
        this.location = location;
        this.router = router;
        this.http = http;
        this.hs = hs;
        this.fb = fb;
        this.registerData = {
            "name": "",
            "hp": "",
            "username": "",
            "email": "",
            "password": "",
            "password_confirmation": ""
        };
        this.rForm = fb.group({
            name: [null, forms_1.Validators.required],
            hp: [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10)])],
            username: [null, forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/), forms_1.Validators.required])],
            password: [null, forms_1.Validators.required],
            password_confirmation: [null, forms_1.Validators.required],
        });
    }
    RegisterComponent.prototype.isValidEmail = function () {
        //return Validator.validate(this.registerData.email);
    };
    RegisterComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    };
    RegisterComponent.prototype.onSignupWithSocialProviderButtonTap = function () {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.registerData);
        if (this.registerData.name && this.registerData.hp && this.registerData.username && this.registerData.email && this.registerData.password && this.registerData.password_confirmation) {
            if (this.isValidEmail()) {
                console.log(this.registerData);
                this.hs.httppost("register", this.registerData).then(function (data) {
                    console.log(data);
                    if (data.message == "Success Register") {
                        ApplicationSettings.setBoolean("authenticated", true);
                        _this.router.navigate(["/secure"], { clearHistory: true });
                    }
                    else {
                        (new nativescript_snackbar_1.SnackBar()).simple("Unable to Register");
                    }
                });
            }
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    RegisterComponent.prototype.goBack = function () {
        this.location.back();
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: "Register",
            moduleId: module.id,
            templateUrl: "./register.component.html"
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.RouterExtensions, http_1.HttpClient, http_service_1.HttpService, forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUEyQztBQUMzQywrREFBaUQ7QUFDakQsMERBQTREO0FBQzVELCtDQUErQztBQUMvQyx3Q0FBK0U7QUFFL0Usc0RBQStEO0FBQy9ELDZDQUFrRDtBQUNsRCx3REFBc0Q7QUFFdEQ7Ozs7OzhEQUs4RDtBQU85RDtJQU9JLDJCQUFvQixRQUFrQixFQUFVLE1BQXdCLEVBQVMsSUFBZ0IsRUFBUyxFQUFlLEVBQVUsRUFBZTtRQUE5SCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDOUksSUFBSSxDQUFDLFlBQVksR0FBRztZQUNoQixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLEVBQUU7WUFDZCxPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxFQUFFO1lBQ2QsdUJBQXVCLEVBQUUsRUFBRTtTQUM5QixDQUFBO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2xCLElBQUksRUFBRyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNsQyxFQUFFLEVBQUcsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JDLEtBQUssRUFBRyxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGtCQUFVLENBQUMsT0FBTyxDQUFDLGtHQUFrRyxDQUFDLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9LLFFBQVEsRUFBRyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUN0QyxxQkFBcUIsRUFBRyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0RCxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJOztzRUFFOEQ7SUFDbEUsQ0FBQztJQUVELCtEQUFtQyxHQUFuQztRQUNJOzs7O3NFQUk4RDtJQUNsRSxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQXFCQztRQXBCRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUNsTCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFFL0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFTO29CQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLENBQUEsQ0FBQzt3QkFDcEMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDdEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUM5RCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLENBQUMsSUFBSSxnQ0FBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztvQkFDbEQsQ0FBQztnQkFFTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBdEVRLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FRZ0MsaUJBQVEsRUFBa0IseUJBQWdCLEVBQWUsaUJBQVUsRUFBYSwwQkFBVyxFQUFjLG1CQUFXO09BUHpJLGlCQUFpQixDQXVFN0I7SUFBRCx3QkFBQztDQUFBLEFBdkVELElBdUVDO0FBdkVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuLy9pbXBvcnQgKiBhcyBWYWxpZGF0b3IgZnJvbSBcImVtYWlsLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvaHR0cC9odHRwLnNlcnZpY2VcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogQmVmb3JlIHlvdSBjYW4gbmF2aWdhdGUgdG8gdGhpcyBwYWdlIGZyb20geW91ciBhcHAsIHlvdSBuZWVkIHRvIHJlZmVyZW5jZSB0aGlzIHBhZ2UncyBtb2R1bGUgaW4gdGhlXG4qIGdsb2JhbCBhcHAgcm91dGVyIG1vZHVsZS4gQWRkIHRoZSBmb2xsb3dpbmcgb2JqZWN0IHRvIHRoZSBnbG9iYWwgYXJyYXkgb2Ygcm91dGVzOlxuKiB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgbG9hZENoaWxkcmVuOiBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIubW9kdWxlI1JlZ2lzdGVyTW9kdWxlXCIgfVxuKiBOb3RlIHRoYXQgdGhpcyBzaW1wbHkgcG9pbnRzIHRoZSBwYXRoIHRvIHRoZSBwYWdlIG1vZHVsZSBmaWxlLiBJZiB5b3UgbW92ZSB0aGUgcGFnZSwgeW91IG5lZWQgdG8gdXBkYXRlIHRoZSByb3V0ZSB0b28uXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJSZWdpc3RlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyByZWdpc3RlckRhdGE6IGFueTtcbiAgICBzdGF0dXM6IGFueTtcbiAgICBwb3N0OiBhbnk7XG4gICAgckZvcm06IEZvcm1Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBoczogSHR0cFNlcnZpY2UsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJEYXRhID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcImhwXCI6IFwiXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCIsXG4gICAgICAgICAgICBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiOiBcIlwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJGb3JtID0gZmIuZ3JvdXAoe1xuICAgICAgICAgICAgbmFtZSA6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGhwIDogW251bGwsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTApXSldLFxuICAgICAgICAgICAgdXNlcm5hbWU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgICAgIGVtYWlsIDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucGF0dGVybigvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvKSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgICAgICAgICAgIHBhc3N3b3JkIDogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uIDogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlzVmFsaWRFbWFpbCgpIHtcbiAgICAgICAgLy9yZXR1cm4gVmFsaWRhdG9yLnZhbGlkYXRlKHRoaXMucmVnaXN0ZXJEYXRhLmVtYWlsKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgb25TaWdudXBXaXRoU29jaWFsUHJvdmlkZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogRm9yIHNpZ24gdXAgd2l0aCBzb2NpYWwgcHJvdmlkZXIgeW91IGNhbiBhZGQgeW91ciBjdXN0b20gbG9naWMgb3JcbiAgICAgICAgKiB1c2UgTmF0aXZlU2NyaXB0IHBsdWdpbiBmb3Igc2lnbiB1cCB3aXRoIEZhY2Vib29rXG4gICAgICAgICogaHR0cDovL21hcmtldC5uYXRpdmVzY3JpcHQub3JnL3BsdWdpbnMvbmF0aXZlc2NyaXB0LWZhY2Vib29rXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVnaXN0ZXJEYXRhKTtcbiAgICAgICAgaWYodGhpcy5yZWdpc3RlckRhdGEubmFtZSAmJiB0aGlzLnJlZ2lzdGVyRGF0YS5ocCAmJiB0aGlzLnJlZ2lzdGVyRGF0YS51c2VybmFtZSAmJiB0aGlzLnJlZ2lzdGVyRGF0YS5lbWFpbCAmJiB0aGlzLnJlZ2lzdGVyRGF0YS5wYXNzd29yZCAmJiB0aGlzLnJlZ2lzdGVyRGF0YS5wYXNzd29yZF9jb25maXJtYXRpb24pIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNWYWxpZEVtYWlsKCkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVnaXN0ZXJEYXRhKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaHMuaHR0cHBvc3QoXCJyZWdpc3RlclwiLCB0aGlzLnJlZ2lzdGVyRGF0YSkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09IFwiU3VjY2VzcyBSZWdpc3RlclwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0Qm9vbGVhbihcImF1dGhlbnRpY2F0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VjdXJlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiVW5hYmxlIHRvIFJlZ2lzdGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkFsbCBGaWVsZHMgUmVxdWlyZWQhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxufVxuXG4iXX0=