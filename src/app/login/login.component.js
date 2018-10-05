"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var ApplicationSettings = require("application-settings");
var http_1 = require("@angular/common/http");
var http_service_1 = require("~/app/http/http.service");
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
        if (this.loginData.username && this.loginData.password) {
            this.hs.httppost("login", this.loginData);
            // this.hs.httppost("login", this.loginData).subscribe((data: any) => {
            //     this.token = data.token; 
            //     ApplicationSettings.setBoolean("authenticated", true);
            //     this.router.navigate(["/secure"], { clearHistory: true });
            // });
            // this.http.post("login", this.loginData).subscribe((data: any) => {
            //     ApplicationSettings.setBoolean("authenticated", true);
            //     this.router.navigate(["/secure"], { clearHistory: true });
            // });
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
// export class LoginComponent implements OnInit {
//     public input: any;
//     public constructor(private router: RouterExtensions) {
//         this.input = {
//             "email": "",
//             "password": ""
//         }
//     }
//     public ngOnInit() {
//         if(ApplicationSettings.getBoolean("authenticated", false)) {
//             this.router.navigate(["/secure"], { clearHistory: true });
//         }
//     }
//     public login() {
//         if(this.input.email && this.input.password) {
//             let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
//             if(this.input.email == account.email && this.input.password == account.password) {
//                 ApplicationSettings.setBoolean("authenticated", true);
//                 this.router.navigate(["/secure"], { clearHistory: true });
//             } else {
//                 (new SnackBar()).simple("Incorrect Credentials!");
//             }
//         } else {
//             (new SnackBar()).simple("All Fields Required!");
//         }
//     }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUErRDtBQUMvRCwrREFBaUQ7QUFDakQsMERBQTREO0FBQzVELDZDQUFrRDtBQUNsRCx3REFBc0Q7QUFFdEQ7Ozs7OzhEQUs4RDtBQU85RDtJQU1JLHdCQUFtQixNQUF3QixFQUFTLElBQWdCLEVBQVMsRUFBZTtRQUF6RSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ3hGLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDYixVQUFVLEVBQUUsRUFBRTtZQUNkLFVBQVUsRUFBRSxFQUFFO1NBQ2pCLENBQUE7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDO0lBQ0wsQ0FBQztJQUVELDJEQUFrQyxHQUFsQztRQUNJOzs7O3NFQUk4RDtJQUNsRSxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVwRCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTFDLHVFQUF1RTtZQUN2RSxnQ0FBZ0M7WUFDaEMsNkRBQTZEO1lBQzdELGlFQUFpRTtZQUNqRSxNQUFNO1lBRU4scUVBQXFFO1lBQ3JFLDZEQUE2RDtZQUM3RCxpRUFBaUU7WUFDakUsTUFBTTtRQUNWLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLENBQUMsSUFBSSxnQ0FBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwRCxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNJOztzRUFFOEQ7SUFDbEUsQ0FBQztJQW5EUSxjQUFjO1FBTDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQU82Qix5QkFBZ0IsRUFBZSxpQkFBVSxFQUFhLDBCQUFXO09BTm5GLGNBQWMsQ0FvRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSx3Q0FBYztBQXNEM0Isa0RBQWtEO0FBRWxELHlCQUF5QjtBQUV6Qiw2REFBNkQ7QUFDN0QseUJBQXlCO0FBQ3pCLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFDN0IsWUFBWTtBQUNaLFFBQVE7QUFFUiwwQkFBMEI7QUFDMUIsdUVBQXVFO0FBQ3ZFLHlFQUF5RTtBQUN6RSxZQUFZO0FBQ1osUUFBUTtBQUVSLHVCQUF1QjtBQUN2Qix3REFBd0Q7QUFDeEQsd0ZBQXdGO0FBQ3hGLGlHQUFpRztBQUNqRyx5RUFBeUU7QUFDekUsNkVBQTZFO0FBQzdFLHVCQUF1QjtBQUN2QixxRUFBcUU7QUFDckUsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQiwrREFBK0Q7QUFDL0QsWUFBWTtBQUNaLFFBQVE7QUFFUixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNuYWNrQmFyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL2h0dHAvaHR0cC5zZXJ2aWNlXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEJlZm9yZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoaXMgcGFnZSBmcm9tIHlvdXIgYXBwLCB5b3UgbmVlZCB0byByZWZlcmVuY2UgdGhpcyBwYWdlJ3MgbW9kdWxlIGluIHRoZVxuKiBnbG9iYWwgYXBwIHJvdXRlciBtb2R1bGUuIEFkZCB0aGUgZm9sbG93aW5nIG9iamVjdCB0byB0aGUgZ2xvYmFsIGFycmF5IG9mIHJvdXRlczpcbiogeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiIH1cbiogTm90ZSB0aGF0IHRoaXMgc2ltcGx5IHBvaW50cyB0aGUgcGF0aCB0byB0aGUgcGFnZSBtb2R1bGUgZmlsZS4gSWYgeW91IG1vdmUgdGhlIHBhZ2UsIHlvdSBuZWVkIHRvIHVwZGF0ZSB0aGUgcm91dGUgdG9vLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy8gZW1haWw6IHN0cmluZztcbiAgICAvLyBwYXNzd29yZDogc3RyaW5nO1xuICAgIHB1YmxpYyBsb2dpbkRhdGE6IGFueTtcbiAgICB0b2tlbjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucywgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBoczogSHR0cFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5sb2dpbkRhdGEgPSB7XG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZihBcHBsaWNhdGlvblNldHRpbmdzLmdldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIGZhbHNlKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3NlY3VyZVwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvZ2luV2l0aFNvY2lhbFByb3ZpZGVyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIEZvciBsb2cgaW4gd2l0aCBzb2NpYWwgcHJvdmlkZXIgeW91IGNhbiBhZGQgeW91ciBjdXN0b20gbG9naWMgb3JcbiAgICAgICAgKiB1c2UgTmF0aXZlU2NyaXB0IHBsdWdpbiBmb3IgbG9nIGluIHdpdGggRmFjZWJvb2tcbiAgICAgICAgKiBodHRwOi8vbWFya2V0Lm5hdGl2ZXNjcmlwdC5vcmcvcGx1Z2lucy9uYXRpdmVzY3JpcHQtZmFjZWJvb2tcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBsb2dpbigpOiB2b2lkIHtcbiAgICAgICAgaWYodGhpcy5sb2dpbkRhdGEudXNlcm5hbWUgJiYgdGhpcy5sb2dpbkRhdGEucGFzc3dvcmQpIHtcblxuICAgICAgICAgICAgdGhpcy5ocy5odHRwcG9zdChcImxvZ2luXCIsIHRoaXMubG9naW5EYXRhKTtcblxuICAgICAgICAgICAgLy8gdGhpcy5ocy5odHRwcG9zdChcImxvZ2luXCIsIHRoaXMubG9naW5EYXRhKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMudG9rZW4gPSBkYXRhLnRva2VuOyBcbiAgICAgICAgICAgIC8vICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldEJvb2xlYW4oXCJhdXRoZW50aWNhdGVkXCIsIHRydWUpO1xuICAgICAgICAgICAgLy8gICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIC8vIHRoaXMuaHR0cC5wb3N0KFwibG9naW5cIiwgdGhpcy5sb2dpbkRhdGEpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VjdXJlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRm9yZ290UGFzc3dvcmRUYXAoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogQ2FsbCB5b3VyIEZvcmdvdCBQYXNzd29yZCBsb2dpYyBoZXJlLlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cbn1cblxuLy8gZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuLy8gICAgIHB1YmxpYyBpbnB1dDogYW55O1xuXG4vLyAgICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4vLyAgICAgICAgIHRoaXMuaW5wdXQgPSB7XG4vLyAgICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXG4vLyAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCJcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbi8vICAgICAgICAgaWYoQXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCBmYWxzZSkpIHtcbi8vICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgcHVibGljIGxvZ2luKCkge1xuLy8gICAgICAgICBpZih0aGlzLmlucHV0LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcbi8vICAgICAgICAgICAgIGxldCBhY2NvdW50ID0gSlNPTi5wYXJzZShBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcImFjY291bnRcIiwgXCJ7fVwiKSk7XG4vLyAgICAgICAgICAgICBpZih0aGlzLmlucHV0LmVtYWlsID09IGFjY291bnQuZW1haWwgJiYgdGhpcy5pbnB1dC5wYXNzd29yZCA9PSBhY2NvdW50LnBhc3N3b3JkKSB7XG4vLyAgICAgICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCB0cnVlKTtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2VjdXJlXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJJbmNvcnJlY3QgQ3JlZGVudGlhbHMhXCIpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJBbGwgRmllbGRzIFJlcXVpcmVkIVwiKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gfSJdfQ==