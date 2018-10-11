"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
//import { HttpClient } from "@angular/common/http";
var http_service_1 = require("~/app/http/http.service");
var localStorage = require("nativescript-localstorage");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "login", loadChildren: "./login/login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, hs) {
        this.router = router;
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
            var requestBody = new FormData();
            requestBody.append("username", this.loginData.username);
            requestBody.append("password", this.loginData.password);
            this.hs.posthttp("login", requestBody).then(function (data) {
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
        __metadata("design:paramtypes", [router_1.RouterExtensions, http_service_1.HttpService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUErRDtBQUMvRCwrREFBaUQ7QUFDakQsMERBQTREO0FBQzVELG9EQUFvRDtBQUNwRCx3REFBc0Q7QUFDdEQsd0RBQTBEO0FBRzFEOzs7Ozs4REFLOEQ7QUFPOUQ7SUFNSSx3QkFBbUIsTUFBd0IsRUFBUyxFQUFlO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2IsVUFBVSxFQUFFLEVBQUU7WUFDZCxVQUFVLEVBQUUsRUFBRTtTQUNqQixDQUFBO0lBQ0wsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUQsQ0FBQztJQUNMLENBQUM7SUFFRCwyREFBa0MsR0FBbEM7UUFDSTs7OztzRUFJOEQ7SUFDbEUsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkF3QkM7UUF2QkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksV0FBVyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDakMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXhELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBQyxXQUFXLENBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFTO2dCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxDQUFBLENBQUM7b0JBQ2pDLG1EQUFtRDtvQkFDbkQsbURBQW1EO29CQUNuRCxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN0RCxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRS9DLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLENBQUMsSUFBSSxnQ0FBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNJOztzRUFFOEQ7SUFDbEUsQ0FBQztJQXpEUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU82Qix5QkFBZ0IsRUFBYSwwQkFBVztPQU4xRCxjQUFjLENBMEQxQjtJQUFELHFCQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuLy9pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gXCJ+L2FwcC9odHRwL2h0dHAuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgbG9jYWxTdG9yYWdlIGZyb20gJ25hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2UnO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEJlZm9yZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoaXMgcGFnZSBmcm9tIHlvdXIgYXBwLCB5b3UgbmVlZCB0byByZWZlcmVuY2UgdGhpcyBwYWdlJ3MgbW9kdWxlIGluIHRoZVxuKiBnbG9iYWwgYXBwIHJvdXRlciBtb2R1bGUuIEFkZCB0aGUgZm9sbG93aW5nIG9iamVjdCB0byB0aGUgZ2xvYmFsIGFycmF5IG9mIHJvdXRlczpcbiogeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiIH1cbiogTm90ZSB0aGF0IHRoaXMgc2ltcGx5IHBvaW50cyB0aGUgcGF0aCB0byB0aGUgcGFnZSBtb2R1bGUgZmlsZS4gSWYgeW91IG1vdmUgdGhlIHBhZ2UsIHlvdSBuZWVkIHRvIHVwZGF0ZSB0aGUgcm91dGUgdG9vLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy8gZW1haWw6IHN0cmluZztcbiAgICAvLyBwYXNzd29yZDogc3RyaW5nO1xuICAgIHB1YmxpYyBsb2dpbkRhdGE6IGFueTtcbiAgICB0b2tlbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHVibGljIGhzOiBIdHRwU2VydmljZSkge1xuICAgICAgICB0aGlzLmxvZ2luRGF0YSA9IHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogXCJcIixcbiAgICAgICAgICAgIFwicGFzc3dvcmRcIjogXCJcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGlmKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0Qm9vbGVhbihcImF1dGhlbnRpY2F0ZWRcIiwgZmFsc2UpKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VjdXJlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9naW5XaXRoU29jaWFsUHJvdmlkZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogRm9yIGxvZyBpbiB3aXRoIHNvY2lhbCBwcm92aWRlciB5b3UgY2FuIGFkZCB5b3VyIGN1c3RvbSBsb2dpYyBvclxuICAgICAgICAqIHVzZSBOYXRpdmVTY3JpcHQgcGx1Z2luIGZvciBsb2cgaW4gd2l0aCBGYWNlYm9va1xuICAgICAgICAqIGh0dHA6Ly9tYXJrZXQubmF0aXZlc2NyaXB0Lm9yZy9wbHVnaW5zL25hdGl2ZXNjcmlwdC1mYWNlYm9va1xuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cblxuICAgIGxvZ2luKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxvZ2luRGF0YSk7XG4gICAgICAgIGlmKHRoaXMubG9naW5EYXRhLnVzZXJuYW1lICYmIHRoaXMubG9naW5EYXRhLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdEJvZHkgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZChcInVzZXJuYW1lXCIsIHRoaXMubG9naW5EYXRhLnVzZXJuYW1lKTtcbiAgICAgICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZChcInBhc3N3b3JkXCIsIHRoaXMubG9naW5EYXRhLnBhc3N3b3JkKTtcbiAgXG4gICAgICAgICAgICB0aGlzLmhzLnBvc3RodHRwKFwibG9naW5cIixyZXF1ZXN0Qm9keSApLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzIExvZ2luXCIpe1xuICAgICAgICAgICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBkYXRhLnVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJfcGFzcycsIGRhdGEucGFzc3dvcmQpXG4gICAgICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0Qm9vbGVhbihcImF1dGhlbnRpY2F0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyX3Rva2VuJywgZGF0YS50b2tlbik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJpbmNvcnJlY3QgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiQWxsIEZpZWxkcyBSZXF1aXJlZCFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvcmdvdFBhc3N3b3JkVGFwKCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIENhbGwgeW91ciBGb3Jnb3QgUGFzc3dvcmQgbG9naWMgaGVyZS5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG59Il19