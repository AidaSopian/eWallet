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
    RegisterComponent.prototype.passConfirm = function (pass, cfmPass) {
        if (cfmPass === pass) {
            return true;
        }
        else {
            return false;
        }
        ;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.regData);
        var requestBody = new FormData();
        requestBody.append("name", this.registerData.name);
        requestBody.append("hp", this.registerData.hp);
        requestBody.append("username", this.registerData.username);
        requestBody.append("email", this.registerData.email);
        requestBody.append("password", this.registerData.password);
        requestBody.append("password_confirmation", this.registerData.password_confirmation);
        this.hs.posthttp("login", requestBody).then(function (data) {
            console.log(data);
            if (data.message == "Success Register") {
                ApplicationSettings.setBoolean("authenticated", true);
                _this.router.navigate(["/secure"], { clearHistory: true });
            }
            else {
                (new nativescript_snackbar_1.SnackBar()).simple("Unable to Register");
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUEyQztBQUMzQywrREFBaUQ7QUFDakQsMERBQTREO0FBQzVELDJDQUE2QztBQUM3Qyx3Q0FBb0U7QUFFcEUsc0RBQStEO0FBQy9ELDZDQUFrRDtBQUNsRCx3REFBc0Q7QUFRdEQ7SUFNSSwyQkFDWSxRQUFrQixFQUNsQixNQUF3QixFQUN6QixJQUFnQixFQUNoQixFQUFlLEVBQ2QsRUFBZTtRQUpmLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUV2QixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2hCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsSUFBSSxFQUFFLEVBQUU7WUFDUixVQUFVLEVBQUUsRUFBRTtZQUNkLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEVBQUU7WUFDZCx1QkFBdUIsRUFBRSxFQUFFO1NBQzlCLENBQUE7SUFDTCxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0k7O3NFQUU4RDtJQUNsRSxDQUFDO0lBRUQsK0RBQW1DLEdBQW5DO1FBQ0k7Ozs7c0VBSThEO0lBQ2xFLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksSUFBSSxFQUFFLE9BQU87UUFDckIsRUFBRSxDQUFBLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQUMsQ0FBQztRQUFBLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUNqQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRCxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsV0FBVyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFckYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQVM7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLGtCQUFrQixDQUFDLENBQUEsQ0FBQztnQkFDcEMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDdEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixDQUFDLElBQUksZ0NBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEQsQ0FBQztRQUVMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUF2RVEsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtTQUMzQyxDQUFDO3lDQVF3QixpQkFBUTtZQUNWLHlCQUFnQjtZQUNuQixpQkFBVTtZQUNaLDBCQUFXO1lBQ1YsbUJBQVc7T0FYbEIsaUJBQWlCLENBd0U3QjtJQUFELHdCQUFDO0NBQUEsQUF4RUQsSUF3RUM7QUF4RVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9SeCc7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuaW1wb3J0ICogYXMgVmFsaWRhdG9yIGZyb20gXCJlbWFpbC12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvaHR0cC9odHRwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlJlZ2lzdGVyXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcmVnaXN0ZXJEYXRhOiBhbnk7XHJcbiAgICBzdGF0dXM6IGFueTtcclxuICAgIHJlZ0RhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbiwgXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LCBcclxuICAgICAgICBwdWJsaWMgaHM6IEh0dHBTZXJ2aWNlLCBcclxuICAgICAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlclxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJEYXRhID0ge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJcIixcclxuICAgICAgICAgICAgXCJocFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcInVzZXJuYW1lXCI6IFwiXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJcIixcclxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBcIlwiLFxyXG4gICAgICAgICAgICBcInBhc3N3b3JkX2NvbmZpcm1hdGlvblwiOiBcIlwiLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkRW1haWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRvci52YWxpZGF0ZSh0aGlzLnJlZ2lzdGVyRGF0YS52YWx1ZS5lbWFpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gaW5pdGlhbGl6ZSBkYXRhIGZvciB0aGlzIGNvbXBvbmVudC5cclxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2lnbnVwV2l0aFNvY2lhbFByb3ZpZGVyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgKiBGb3Igc2lnbiB1cCB3aXRoIHNvY2lhbCBwcm92aWRlciB5b3UgY2FuIGFkZCB5b3VyIGN1c3RvbSBsb2dpYyBvclxyXG4gICAgICAgICogdXNlIE5hdGl2ZVNjcmlwdCBwbHVnaW4gZm9yIHNpZ24gdXAgd2l0aCBGYWNlYm9va1xyXG4gICAgICAgICogaHR0cDovL21hcmtldC5uYXRpdmVzY3JpcHQub3JnL3BsdWdpbnMvbmF0aXZlc2NyaXB0LWZhY2Vib29rXHJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAgIH1cclxuXHJcbiAgICBwYXNzQ29uZmlybShwYXNzLCBjZm1QYXNzKXtcclxuICAgICAgICBpZihjZm1QYXNzID09PSBwYXNzKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIGZhbHNlIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWdEYXRhKTtcclxuICAgICAgICBsZXQgcmVxdWVzdEJvZHkgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoXCJuYW1lXCIsIHRoaXMucmVnaXN0ZXJEYXRhLm5hbWUpO1xyXG4gICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZChcImhwXCIsIHRoaXMucmVnaXN0ZXJEYXRhLmhwKTtcclxuICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoXCJ1c2VybmFtZVwiLCB0aGlzLnJlZ2lzdGVyRGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgcmVxdWVzdEJvZHkuYXBwZW5kKFwiZW1haWxcIiwgdGhpcy5yZWdpc3RlckRhdGEuZW1haWwpO1xyXG4gICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZChcInBhc3N3b3JkXCIsIHRoaXMucmVnaXN0ZXJEYXRhLnBhc3N3b3JkKTtcclxuICAgICAgICByZXF1ZXN0Qm9keS5hcHBlbmQoXCJwYXNzd29yZF9jb25maXJtYXRpb25cIiwgdGhpcy5yZWdpc3RlckRhdGEucGFzc3dvcmRfY29uZmlybWF0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5ocy5wb3N0aHR0cChcImxvZ2luXCIsIHJlcXVlc3RCb2R5KS50aGVuKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT0gXCJTdWNjZXNzIFJlZ2lzdGVyXCIpe1xyXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKFwiYXV0aGVudGljYXRlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zZWN1cmVcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgKG5ldyBTbmFja0JhcigpKS5zaW1wbGUoXCJVbmFibGUgdG8gUmVnaXN0ZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19