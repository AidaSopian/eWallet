"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
var Validator = require("email-validator");
var forms_1 = require("@angular/forms");
var router_1 = require("nativescript-angular/router");
var http_1 = require("@angular/common/http");
var http_service_1 = require("~/app/http/http.service");
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
            "password_confirmation": "",
        };
        // this.registerData = this.fb.group({
        //     name : [null, Validators.required],
        //     hp : [null, Validators.compose([Validators.required, Validators.minLength(10)])],
        //     username: [null, Validators.required],
        //     email : ['', Validators.compose([Validators.pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/), Validators.required])],
        //     password : [null, Validators.required],
        //     password_confirmation : [null, Validators.required],
        // })
    }
    RegisterComponent.prototype.isValidEmail = function () {
        return Validator.validate(this.registerData.value.email);
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
        console.log(this.regData);
        if (this.isValidEmail()) {
            this.hs.httppost("register", this.regData).then(function (data) {
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
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    RegisterComponent.prototype.passConfirm = function () {
        return true;
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
        __metadata("design:paramtypes", [common_1.Location,
            router_1.RouterExtensions,
            http_1.HttpClient,
            http_service_1.HttpService,
            forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUEyQztBQUMzQywrREFBaUQ7QUFDakQsMERBQTREO0FBQzVELDJDQUE2QztBQUM3Qyx3Q0FBb0U7QUFFcEUsc0RBQStEO0FBQy9ELDZDQUFrRDtBQUNsRCx3REFBc0Q7QUFRdEQ7SUFNSSwyQkFDWSxRQUFrQixFQUNsQixNQUF3QixFQUN6QixJQUFnQixFQUNoQixFQUFlLEVBQ2QsRUFBZTtRQUpmLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUV2QixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsRUFBRTtZQUNkLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEVBQUU7WUFDZCx1QkFBdUIsRUFBRSxFQUFFO1NBQzlCLENBQUE7UUFFRCxzQ0FBc0M7UUFDdEMsMENBQTBDO1FBQzFDLHdGQUF3RjtRQUN4Riw2Q0FBNkM7UUFDN0MsdUxBQXVMO1FBQ3ZMLDhDQUE4QztRQUM5QywyREFBMkQ7UUFDM0QsS0FBSztJQUNULENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUFFRCwrREFBbUMsR0FBbkM7UUFDSTs7OztzRUFJOEQ7SUFDbEUsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFqQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVyQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7Z0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksa0JBQWtCLENBQUMsQ0FBQSxDQUFDO29CQUNwQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN0RCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQTdFUSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7eUNBUXdCLGlCQUFRO1lBQ1YseUJBQWdCO1lBQ25CLGlCQUFVO1lBQ1osMEJBQVc7WUFDVixtQkFBVztPQVhsQixpQkFBaUIsQ0E4RTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgKiBhcyBWYWxpZGF0b3IgZnJvbSBcImVtYWlsLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gXCJ+L2FwcC9odHRwL2h0dHAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUmVnaXN0ZXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3JlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICByZWdpc3RlckRhdGE6IGFueTtcclxuICAgIHN0YXR1czogYW55O1xyXG4gICAgcmVnRGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIFxyXG4gICAgICAgIHB1YmxpYyBoczogSHR0cFNlcnZpY2UsIFxyXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckRhdGEgPSB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcImhwXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwicGFzc3dvcmRfY29uZmlybWF0aW9uXCI6IFwiXCIsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyRGF0YSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIC8vICAgICBuYW1lIDogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIC8vICAgICBocCA6IFtudWxsLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEwKV0pXSxcclxuICAgICAgICAvLyAgICAgdXNlcm5hbWU6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAvLyAgICAgZW1haWwgOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5wYXR0ZXJuKC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC8pLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxyXG4gICAgICAgIC8vICAgICBwYXNzd29yZCA6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAvLyAgICAgcGFzc3dvcmRfY29uZmlybWF0aW9uIDogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZEVtYWlsKCkge1xyXG4gICAgICAgIHJldHVybiBWYWxpZGF0b3IudmFsaWRhdGUodGhpcy5yZWdpc3RlckRhdGEudmFsdWUuZW1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgKiBVc2UgdGhlIFwibmdPbkluaXRcIiBoYW5kbGVyIHRvIGluaXRpYWxpemUgZGF0YSBmb3IgdGhpcyBjb21wb25lbnQuXHJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIH1cclxuXHJcbiAgICBvblNpZ251cFdpdGhTb2NpYWxQcm92aWRlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICogRm9yIHNpZ24gdXAgd2l0aCBzb2NpYWwgcHJvdmlkZXIgeW91IGNhbiBhZGQgeW91ciBjdXN0b20gbG9naWMgb3JcclxuICAgICAgICAqIHVzZSBOYXRpdmVTY3JpcHQgcGx1Z2luIGZvciBzaWduIHVwIHdpdGggRmFjZWJvb2tcclxuICAgICAgICAqIGh0dHA6Ly9tYXJrZXQubmF0aXZlc2NyaXB0Lm9yZy9wbHVnaW5zL25hdGl2ZXNjcmlwdC1mYWNlYm9va1xyXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVnRGF0YSk7XHJcbiAgICAgICAgaWYodGhpcy5pc1ZhbGlkRW1haWwoKSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ocy5odHRwcG9zdChcInJlZ2lzdGVyXCIsIHRoaXMucmVnRGF0YSkudGhlbigoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzIFJlZ2lzdGVyXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0Qm9vbGVhbihcImF1dGhlbnRpY2F0ZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiVW5hYmxlIHRvIFJlZ2lzdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGFzc0NvbmZpcm0oKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ29CYWNrKCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=