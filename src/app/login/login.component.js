"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
var http_1 = require("@angular/common/http");
var http_service_1 = require("~/app/http/http.service");
var localStorage = require("nativescript-localstorage");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "login", loadChildren: "./login/login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, hs) {
        this.router = router;
        this.http = http;
        this.hs = hs;
        this.loginData = {
            "username": "",
            "password": ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/secure"], { clearHistory: true });
        }
    };
    LoginComponent.prototype.onLoginWithSocialProviderButtonTap = function () {
        /* ***********************************************************
        * For log in with social provider you can add your custom logic or
        * use NativeScript plugin for log in with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.loginData);
        if (this.loginData.username && this.loginData.password) {
            this.hs.httppost("login", this.loginData).then(function (data) {
                console.log(data);
                if (data.message == "Success Login") {
                    // localStorage.setItem('username', data.username);
                    // localStorage.setItem('user_pass', data.password)
                    ApplicationSettings.setBoolean("authenticated", true);
                    localStorage.setItem('user_token', data.token);
                    _this.router.navigate(["/secure"]);
                }
                else {
                    (new nativescript_snackbar_1.SnackBar()).simple("incorrect username or password");
                }
            });
        }
        else {
            (new nativescript_snackbar_1.SnackBar()).simple("All Fields Required!");
        }
    };
    LoginComponent.prototype.onForgotPasswordTap = function () {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, http_1.HttpClient, http_service_1.HttpService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUErRDtBQUMvRCwrREFBaUQ7QUFDakQsMERBQTREO0FBQzVELDZDQUFrRDtBQUNsRCx3REFBc0Q7QUFDdEQsd0RBQTBEO0FBRzFEOzs7Ozs4REFLOEQ7QUFPOUQ7SUFNSSx3QkFBbUIsTUFBd0IsRUFBUyxJQUFnQixFQUFTLEVBQWU7UUFBekUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUN4RixJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2IsVUFBVSxFQUFFLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFBO0lBQ0wsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNMLENBQUM7SUFFRCwyREFBa0MsR0FBbEM7UUFDSTs7OztzRUFJOEQ7SUFDbEUsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFxQkM7UUFwQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRXBELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBUztnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQSxDQUFDO29CQUNqQyxtREFBbUQ7b0JBQ25ELG1EQUFtRDtvQkFDbkQsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUUvQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osQ0FBQyxJQUFJLGdDQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFDSTs7c0VBRThEO0lBQ2xFLENBQUM7SUF0RFEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FPNkIseUJBQWdCLEVBQWUsaUJBQVUsRUFBYSwwQkFBVztPQU5uRixjQUFjLENBdUQxQjtJQUFELHFCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvaHR0cC9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGxvY2FsU3RvcmFnZSBmcm9tICduYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlJztcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBCZWZvcmUgeW91IGNhbiBuYXZpZ2F0ZSB0byB0aGlzIHBhZ2UgZnJvbSB5b3VyIGFwcCwgeW91IG5lZWQgdG8gcmVmZXJlbmNlIHRoaXMgcGFnZSdzIG1vZHVsZSBpbiB0aGVcbiogZ2xvYmFsIGFwcCByb3V0ZXIgbW9kdWxlLiBBZGQgdGhlIGZvbGxvd2luZyBvYmplY3QgdG8gdGhlIGdsb2JhbCBhcnJheSBvZiByb3V0ZXM6XG4qIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIiB9XG4qIE5vdGUgdGhhdCB0aGlzIHNpbXBseSBwb2ludHMgdGhlIHBhdGggdG8gdGhlIHBhZ2UgbW9kdWxlIGZpbGUuIElmIHlvdSBtb3ZlIHRoZSBwYWdlLCB5b3UgbmVlZCB0byB1cGRhdGUgdGhlIHJvdXRlIHRvby5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vIGVtYWlsOiBzdHJpbmc7XG4gICAgLy8gcGFzc3dvcmQ6IHN0cmluZztcbiAgICBwdWJsaWMgbG9naW5EYXRhOiBhbnk7XG4gICAgdG9rZW46IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgaHM6IEh0dHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMubG9naW5EYXRhID0ge1xuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2dpbldpdGhTb2NpYWxQcm92aWRlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBGb3IgbG9nIGluIHdpdGggc29jaWFsIHByb3ZpZGVyIHlvdSBjYW4gYWRkIHlvdXIgY3VzdG9tIGxvZ2ljIG9yXG4gICAgICAgICogdXNlIE5hdGl2ZVNjcmlwdCBwbHVnaW4gZm9yIGxvZyBpbiB3aXRoIEZhY2Vib29rXG4gICAgICAgICogaHR0cDovL21hcmtldC5uYXRpdmVzY3JpcHQub3JnL3BsdWdpbnMvbmF0aXZlc2NyaXB0LWZhY2Vib29rXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxuXG4gICAgbG9naW4oKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9naW5EYXRhKTtcbiAgICAgICAgaWYodGhpcy5sb2dpbkRhdGEudXNlcm5hbWUgJiYgdGhpcy5sb2dpbkRhdGEucGFzc3dvcmQpIHtcblxuICAgICAgICAgICAgdGhpcy5ocy5odHRwcG9zdChcImxvZ2luXCIsIHRoaXMubG9naW5EYXRhKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09IFwiU3VjY2VzcyBMb2dpblwiKXtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgZGF0YS51c2VybmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyX3Bhc3MnLCBkYXRhLnBhc3N3b3JkKVxuICAgICAgICAgICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcl90b2tlbicsIGRhdGEudG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiaW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkFsbCBGaWVsZHMgUmVxdWlyZWQhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Gb3Jnb3RQYXNzd29yZFRhcCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBDYWxsIHlvdXIgRm9yZ290IFBhc3N3b3JkIGxvZ2ljIGhlcmUuXG4gICAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgfVxufSJdfQ==