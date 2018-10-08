"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
var Validator = require("email-validator");
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
    function RegisterComponent(location, router, http, hs) {
        this.location = location;
        this.router = router;
        this.http = http;
        this.hs = hs;
        this.registerData = {
            "name": "",
            "hp": "",
            "username": "",
            "email": "",
            "password": "",
            "password_confirmation": ""
        };
    }
    RegisterComponent.prototype.isValidEmail = function () {
        return Validator.validate(this.registerData.email);
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
    RegisterComponent.prototype.validate = function () {
        // name: ['', validator.required],
        // email: ['', validator.compose([Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/), Validators.required])],
        // code: ['', Validators.required],
        // mobile: ['', Validators.compose([Validators.pattern(/^[0-9]{8,12}$/), Validators.required])],
        // password: ['', Validators.compose([Validators.pattern(/(?=[^\s]{8,}$)/), Validators.required])],
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
        __metadata("design:paramtypes", [common_1.Location, router_1.RouterExtensions, http_1.HttpClient, http_service_1.HttpService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUEyQztBQUMzQywrREFBaUQ7QUFDakQsMERBQTREO0FBQzVELDJDQUE2QztBQUU3QyxzREFBK0Q7QUFDL0QsNkNBQWtEO0FBQ2xELHdEQUFzRDtBQUV0RDs7Ozs7OERBSzhEO0FBTzlEO0lBS0ksMkJBQW9CLFFBQWtCLEVBQVUsTUFBd0IsRUFBUyxJQUFnQixFQUFTLEVBQWU7UUFBckcsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDckgsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNoQixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLEVBQUU7WUFDZCxPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxFQUFFO1lBQ2QsdUJBQXVCLEVBQUUsRUFBRTtTQUM5QixDQUFBO0lBQ0wsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBRUQsK0RBQW1DLEdBQW5DO1FBQ0k7Ozs7c0VBSThEO0lBQ2xFLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQ2xMLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUUvQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7b0JBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksa0JBQWtCLENBQUMsQ0FBQSxDQUFDO3dCQUNwQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUN0RCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7b0JBQzlELENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNsRCxDQUFDO2dCQUVMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLENBQUMsSUFBSSxnQ0FBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxrQ0FBa0M7UUFDbEMsaUxBQWlMO1FBQ2pMLG1DQUFtQztRQUNuQyxnR0FBZ0c7UUFDaEcsbUdBQW1HO0lBRXZHLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBcEVRLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7U0FDM0MsQ0FBQzt5Q0FNZ0MsaUJBQVEsRUFBa0IseUJBQWdCLEVBQWUsaUJBQVUsRUFBYSwwQkFBVztPQUxoSCxpQkFBaUIsQ0FxRTdCO0lBQUQsd0JBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCAqIGFzIFZhbGlkYXRvciBmcm9tIFwiZW1haWwtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBGb3JtQnVpbGRlcn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvaHR0cC9odHRwLnNlcnZpY2VcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogQmVmb3JlIHlvdSBjYW4gbmF2aWdhdGUgdG8gdGhpcyBwYWdlIGZyb20geW91ciBhcHAsIHlvdSBuZWVkIHRvIHJlZmVyZW5jZSB0aGlzIHBhZ2UncyBtb2R1bGUgaW4gdGhlXG4qIGdsb2JhbCBhcHAgcm91dGVyIG1vZHVsZS4gQWRkIHRoZSBmb2xsb3dpbmcgb2JqZWN0IHRvIHRoZSBnbG9iYWwgYXJyYXkgb2Ygcm91dGVzOlxuKiB7IHBhdGg6IFwicmVnaXN0ZXJcIiwgbG9hZENoaWxkcmVuOiBcIi4vcmVnaXN0ZXIvcmVnaXN0ZXIubW9kdWxlI1JlZ2lzdGVyTW9kdWxlXCIgfVxuKiBOb3RlIHRoYXQgdGhpcyBzaW1wbHkgcG9pbnRzIHRoZSBwYXRoIHRvIHRoZSBwYWdlIG1vZHVsZSBmaWxlLiBJZiB5b3UgbW92ZSB0aGUgcGFnZSwgeW91IG5lZWQgdG8gdXBkYXRlIHRoZSByb3V0ZSB0b28uXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJSZWdpc3RlclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyByZWdpc3RlckRhdGE6IGFueTtcbiAgICBzdGF0dXM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBoczogSHR0cFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckRhdGEgPSB7XG4gICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwiaHBcIjogXCJcIixcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJcIixcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJcIixcbiAgICAgICAgICAgIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCI6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVmFsaWRFbWFpbCgpIHtcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLnJlZ2lzdGVyRGF0YS5lbWFpbCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cblxuICAgIG9uU2lnbnVwV2l0aFNvY2lhbFByb3ZpZGVyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIEZvciBzaWduIHVwIHdpdGggc29jaWFsIHByb3ZpZGVyIHlvdSBjYW4gYWRkIHlvdXIgY3VzdG9tIGxvZ2ljIG9yXG4gICAgICAgICogdXNlIE5hdGl2ZVNjcmlwdCBwbHVnaW4gZm9yIHNpZ24gdXAgd2l0aCBGYWNlYm9va1xuICAgICAgICAqIGh0dHA6Ly9tYXJrZXQubmF0aXZlc2NyaXB0Lm9yZy9wbHVnaW5zL25hdGl2ZXNjcmlwdC1mYWNlYm9va1xuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlZ2lzdGVyRGF0YSk7XG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXJEYXRhLm5hbWUgJiYgdGhpcy5yZWdpc3RlckRhdGEuaHAgJiYgdGhpcy5yZWdpc3RlckRhdGEudXNlcm5hbWUgJiYgdGhpcy5yZWdpc3RlckRhdGEuZW1haWwgJiYgdGhpcy5yZWdpc3RlckRhdGEucGFzc3dvcmQgJiYgdGhpcy5yZWdpc3RlckRhdGEucGFzc3dvcmRfY29uZmlybWF0aW9uKSB7XG4gICAgICAgICAgICBpZih0aGlzLmlzVmFsaWRFbWFpbCgpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlZ2lzdGVyRGF0YSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhzLmh0dHBwb3N0KFwicmVnaXN0ZXJcIiwgdGhpcy5yZWdpc3RlckRhdGEpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubWVzc2FnZSA9PSBcIlN1Y2Nlc3MgUmVnaXN0ZXJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIlVuYWJsZSB0byBSZWdpc3RlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlKCl7XG4gICAgICAgIC8vIG5hbWU6IFsnJywgdmFsaWRhdG9yLnJlcXVpcmVkXSxcbiAgICAgICAgLy8gZW1haWw6IFsnJywgdmFsaWRhdG9yLmNvbXBvc2UoW1ZhbGlkYXRvcnMucGF0dGVybigvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvKSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgICAgICAgLy8gY29kZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgICAgLy8gbW9iaWxlOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5wYXR0ZXJuKC9eWzAtOV17OCwxMn0kLyksIFZhbGlkYXRvcnMucmVxdWlyZWRdKV0sXG4gICAgICAgIC8vIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5wYXR0ZXJuKC8oPz1bXlxcc117OCx9JCkvKSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG59XG5cbiJdfQ==