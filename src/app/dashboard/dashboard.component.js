"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ApplicationSettings = require("application-settings");
var http_service_1 = require("~/app/http/http.service");
var localStorage = require("nativescript-localstorage");
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, hs) {
        this.router = router;
        this.hs = hs;
        this.userDetails = Array();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem("user_token");
        var url_id = "profile?token=";
        var token_url = url_id.concat(token);
        this.hs.gethttp(token_url)
            .then(function (res) {
            //console.log("dasboard" ,res);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.logout = function () {
        ApplicationSettings.remove("authenticated");
        localStorage.setItem('user_token', "");
        this.router.navigate(["/login"], { clearHistory: true });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "Dashboard",
            moduleId: module.id,
            templateUrl: "./dashboard.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, http_service_1.HttpService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDBEQUE0RDtBQUM1RCx3REFBc0Q7QUFDdEQsd0RBQTBEO0FBRTFEOzs7Ozs4REFLOEQ7QUFPOUQ7SUFFSSw0QkFBb0IsTUFBd0IsRUFBVSxFQUFlO1FBQWpELFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUQ3RCxnQkFBVyxHQUFHLEtBQUssRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQyxJQUFJLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUNyQixJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1YsK0JBQStCO1FBRW5DLENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG1DQUFNLEdBQWI7UUFDSSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUF4QlEsa0JBQWtCO1FBTDlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtTQUM1QyxDQUFDO3lDQUc4Qix5QkFBZ0IsRUFBYywwQkFBVztPQUY1RCxrQkFBa0IsQ0F5QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgQXBwbGljYXRpb25TZXR0aW5ncyBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL2h0dHAvaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JhZ2UgZnJvbSAnbmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZSc7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEJlZm9yZSB5b3UgY2FuIG5hdmlnYXRlIHRvIHRoaXMgcGFnZSBmcm9tIHlvdXIgYXBwLCB5b3UgbmVlZCB0byByZWZlcmVuY2UgdGhpcyBwYWdlJ3MgbW9kdWxlIGluIHRoZVxuKiBnbG9iYWwgYXBwIHJvdXRlciBtb2R1bGUuIEFkZCB0aGUgZm9sbG93aW5nIG9iamVjdCB0byB0aGUgZ2xvYmFsIGFycmF5IG9mIHJvdXRlczpcbiogeyBwYXRoOiBcImRhc2hib2FyZFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZSNEYXNoYm9hcmRNb2R1bGVcIiB9XG4qIE5vdGUgdGhhdCB0aGlzIHNpbXBseSBwb2ludHMgdGhlIHBhdGggdG8gdGhlIHBhZ2UgbW9kdWxlIGZpbGUuIElmIHlvdSBtb3ZlIHRoZSBwYWdlLCB5b3UgbmVlZCB0byB1cGRhdGUgdGhlIHJvdXRlIHRvby5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkRhc2hib2FyZFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9kYXNoYm9hcmQuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgdXNlckRldGFpbHMgPSBBcnJheSgpO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGhzOiBIdHRwU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcl90b2tlblwiKTtcbiAgICAgICAgbGV0IHVybF9pZCA9IFwicHJvZmlsZT90b2tlbj1cIjtcbiAgICAgICAgbGV0IHRva2VuX3VybCA9IHVybF9pZC5jb25jYXQodG9rZW4pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ocy5nZXRodHRwKHRva2VuX3VybClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkYXNib2FyZFwiICxyZXMpO1xuXG4gICAgICAgIH0sIGVyciA9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XG4gICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKFwiYXV0aGVudGljYXRlZFwiKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJfdG9rZW4nLCBcIlwiKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG59XG4iXX0=