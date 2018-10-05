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
        console.log(this.registerData);
        if (this.registerData.name && this.registerData.hp && this.registerData.username && this.registerData.email && this.registerData.password && this.registerData.password_confirmation) {
            if (this.isValidEmail()) {
                console.log(this.registerData);
                this.hs.httppost("register", this.registerData);
                ApplicationSettings.setBoolean("authenticated", true);
                this.router.navigate(["/login"], { clearHistory: true });
                //subscribe error? not getting observable?
                // this.hs.httppost(this.registerData).subscribe(data => {
                //     ApplicationSettings.setBoolean("authenticated", true);
                //     this.router.navigate(["/login"], { clearHistory: true });
                // });
                //somehow this subscription is ok
                // this.http.post("http://ewallet.simbiotiktech.com/app/user/register", this.registerData).subscribe(data => {
                //     ApplicationSettings.setBoolean("authenticated", true);
                //     this.router.navigate(["/login"], { clearHistory: true });
                // });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUEyQztBQUMzQywrREFBaUQ7QUFDakQsMERBQTREO0FBQzVELDJDQUE2QztBQUU3QyxzREFBK0Q7QUFDL0QsNkNBQWtEO0FBQ2xELHdEQUFzRDtBQUV0RDs7Ozs7OERBSzhEO0FBTzlEO0lBS0ksMkJBQW9CLFFBQWtCLEVBQVUsTUFBd0IsRUFBUyxJQUFnQixFQUFTLEVBQWU7UUFBckcsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDckgsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNoQixNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRSxFQUFFO1lBQ1IsVUFBVSxFQUFFLEVBQUU7WUFDZCxPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxFQUFFO1lBQ2QsdUJBQXVCLEVBQUUsRUFBRTtTQUM5QixDQUFBO0lBQ0wsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBRUQsK0RBQW1DLEdBQW5DO1FBQ0k7Ozs7c0VBSThEO0lBQ2xFLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDbEwsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRS9CLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBRWhELG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFFekQsMENBQTBDO2dCQUMxQywwREFBMEQ7Z0JBQzFELDZEQUE2RDtnQkFDN0QsZ0VBQWdFO2dCQUNoRSxNQUFNO2dCQUVOLGlDQUFpQztnQkFDakMsOEdBQThHO2dCQUM5Ryw2REFBNkQ7Z0JBQzdELGdFQUFnRTtnQkFDaEUsTUFBTTtZQUNWLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksa0NBQWtDO1FBQ2xDLGlMQUFpTDtRQUNqTCxtQ0FBbUM7UUFDbkMsZ0dBQWdHO1FBQ2hHLG1HQUFtRztJQUV2RyxDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQTFFUSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7eUNBTWdDLGlCQUFRLEVBQWtCLHlCQUFnQixFQUFlLGlCQUFVLEVBQWEsMEJBQVc7T0FMaEgsaUJBQWlCLENBMkU3QjtJQUFELHdCQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUEzRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgKiBhcyBWYWxpZGF0b3IgZnJvbSBcImVtYWlsLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXJ9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL2h0dHAvaHR0cC5zZXJ2aWNlXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEJlZm9yZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoaXMgcGFnZSBmcm9tIHlvdXIgYXBwLCB5b3UgbmVlZCB0byByZWZlcmVuY2UgdGhpcyBwYWdlJ3MgbW9kdWxlIGluIHRoZVxuKiBnbG9iYWwgYXBwIHJvdXRlciBtb2R1bGUuIEFkZCB0aGUgZm9sbG93aW5nIG9iamVjdCB0byB0aGUgZ2xvYmFsIGFycmF5IG9mIHJvdXRlczpcbiogeyBwYXRoOiBcInJlZ2lzdGVyXCIsIGxvYWRDaGlsZHJlbjogXCIuL3JlZ2lzdGVyL3JlZ2lzdGVyLm1vZHVsZSNSZWdpc3Rlck1vZHVsZVwiIH1cbiogTm90ZSB0aGF0IHRoaXMgc2ltcGx5IHBvaW50cyB0aGUgcGF0aCB0byB0aGUgcGFnZSBtb2R1bGUgZmlsZS4gSWYgeW91IG1vdmUgdGhlIHBhZ2UsIHlvdSBuZWVkIHRvIHVwZGF0ZSB0aGUgcm91dGUgdG9vLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiUmVnaXN0ZXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJEYXRhOiBhbnk7XG4gICAgc3RhdHVzOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBwdWJsaWMgaHM6IEh0dHBTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJEYXRhID0ge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcImhwXCI6IFwiXCIsXG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICBcImVtYWlsXCI6IFwiXCIsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IFwiXCIsXG4gICAgICAgICAgICBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiOiBcIlwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbGlkRW1haWwoKSB7XG4gICAgICAgIHJldHVybiBWYWxpZGF0b3IudmFsaWRhdGUodGhpcy5yZWdpc3RlckRhdGEuZW1haWwpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICBvblNpZ251cFdpdGhTb2NpYWxQcm92aWRlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBGb3Igc2lnbiB1cCB3aXRoIHNvY2lhbCBwcm92aWRlciB5b3UgY2FuIGFkZCB5b3VyIGN1c3RvbSBsb2dpYyBvclxuICAgICAgICAqIHVzZSBOYXRpdmVTY3JpcHQgcGx1Z2luIGZvciBzaWduIHVwIHdpdGggRmFjZWJvb2tcbiAgICAgICAgKiBodHRwOi8vbWFya2V0Lm5hdGl2ZXNjcmlwdC5vcmcvcGx1Z2lucy9uYXRpdmVzY3JpcHQtZmFjZWJvb2tcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB9XG5cbiAgICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWdpc3RlckRhdGEpO1xuICAgICAgICBpZih0aGlzLnJlZ2lzdGVyRGF0YS5uYW1lICYmIHRoaXMucmVnaXN0ZXJEYXRhLmhwICYmIHRoaXMucmVnaXN0ZXJEYXRhLnVzZXJuYW1lICYmIHRoaXMucmVnaXN0ZXJEYXRhLmVtYWlsICYmIHRoaXMucmVnaXN0ZXJEYXRhLnBhc3N3b3JkICYmIHRoaXMucmVnaXN0ZXJEYXRhLnBhc3N3b3JkX2NvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgaWYodGhpcy5pc1ZhbGlkRW1haWwoKSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWdpc3RlckRhdGEpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ocy5odHRwcG9zdChcInJlZ2lzdGVyXCIsIHRoaXMucmVnaXN0ZXJEYXRhKTtcblxuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0Qm9vbGVhbihcImF1dGhlbnRpY2F0ZWRcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgICAgIC8vc3Vic2NyaWJlIGVycm9yPyBub3QgZ2V0dGluZyBvYnNlcnZhYmxlP1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuaHMuaHR0cHBvc3QodGhpcy5yZWdpc3RlckRhdGEpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIC8vc29tZWhvdyB0aGlzIHN1YnNjcmlwdGlvbiBpcyBva1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovL2V3YWxsZXQuc2ltYmlvdGlrdGVjaC5jb20vYXBwL3VzZXIvcmVnaXN0ZXJcIiwgdGhpcy5yZWdpc3RlckRhdGEpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAobmV3IFNuYWNrQmFyKCkpLnNpbXBsZShcIkFsbCBGaWVsZHMgUmVxdWlyZWQhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKXtcbiAgICAgICAgLy8gbmFtZTogWycnLCB2YWxpZGF0b3IucmVxdWlyZWRdLFxuICAgICAgICAvLyBlbWFpbDogWycnLCB2YWxpZGF0b3IuY29tcG9zZShbVmFsaWRhdG9ycy5wYXR0ZXJuKC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC8pLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgICAgICAvLyBjb2RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgICAvLyBtb2JpbGU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnBhdHRlcm4oL15bMC05XXs4LDEyfSQvKSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0pXSxcbiAgICAgICAgLy8gcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnBhdHRlcm4oLyg/PVteXFxzXXs4LH0kKS8pLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSldLFxuICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgIH1cbn1cblxuIl19