"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var tokenKey = "token";
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        var _this = this;
        this.http = http;
        this.url = "http://ewallet.simbiotiktech.com/app/user/";
        this.httppost = function (reqType, data) {
            return _this.http.post(_this.url.concat(reqType), data).subscribe(function (res) { console.log(res); });
        };
        // public httppost = (data: any) => {
        //   return this.http.post("http://ewallet.simbiotiktech.com/app/user/register", data).subscribe((res: any) => {console.log(res);})
        // }
        this.httpget = function (req) {
            return _this.http.get(_this.url.concat(req)).map(function (res) { return res.json(); });
        };
    }
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWtEO0FBQ2xELHNDQUEyQztBQUMzQyxpQ0FBK0I7QUFDL0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBR3pCO0lBR0UscUJBQW1CLElBQWdCO1FBQW5DLGlCQUVDO1FBRmtCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsUUFBRyxHQUFVLDRDQUE0QyxDQUFDO1FBTTFELGFBQVEsR0FBRyxVQUFDLE9BQU8sRUFBRSxJQUFTO1lBQ25DLE1BQU0sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFRLElBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFBO1FBQ3BHLENBQUMsQ0FBQTtRQUVELHFDQUFxQztRQUNyQyxtSUFBbUk7UUFDbkksSUFBSTtRQUVHLFlBQU8sR0FBRyxVQUFDLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQTtJQVpELENBQUM7SUFMVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBSWMsaUJBQVU7T0FIeEIsV0FBVyxDQW1CdkI7SUFBRCxrQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmNvbnN0IHRva2VuS2V5ID0gXCJ0b2tlblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gIHB1YmxpYyB1cmw6c3RyaW5nID0gXCJodHRwOi8vZXdhbGxldC5zaW1iaW90aWt0ZWNoLmNvbS9hcHAvdXNlci9cIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpe1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBodHRwcG9zdCA9IChyZXFUeXBlLCBkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybC5jb25jYXQocmVxVHlwZSksIGRhdGEpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtjb25zb2xlLmxvZyhyZXMpO30pXHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgaHR0cHBvc3QgPSAoZGF0YTogYW55KSA9PiB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXCJodHRwOi8vZXdhbGxldC5zaW1iaW90aWt0ZWNoLmNvbS9hcHAvdXNlci9yZWdpc3RlclwiLCBkYXRhKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7Y29uc29sZS5sb2cocmVzKTt9KVxyXG4gIC8vIH1cclxuXHJcbiAgcHVibGljIGh0dHBnZXQgPSAocmVxKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybC5jb25jYXQocmVxKSkubWFwKChyZXM6IGFueSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=