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
            return new Promise(function (resolve) {
                _this.http.post(_this.url.concat(reqType), data)
                    .subscribe(function (res) {
                    resolve(res);
                    console.log(res);
                });
            });
        };
        this.httpget = function (req, data) {
            return _this.http.get(_this.url.concat(req).concat(data)).map(function (res) { return res.json(); });
        };
    }
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWtEO0FBQ2xELHNDQUEyQztBQUMzQyxpQ0FBK0I7QUFDL0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBR3pCO0lBR0UscUJBQW1CLElBQWdCO1FBQW5DLGlCQUVDO1FBRmtCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsUUFBRyxHQUFVLDRDQUE0QyxDQUFDO1FBTTFELGFBQVEsR0FBRyxVQUFDLE9BQU8sRUFBRSxJQUFTO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBRSxVQUFBLE9BQU87Z0JBQ3pCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQztxQkFDN0MsU0FBUyxDQUFDLFVBQUMsR0FBUTtvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFFTSxZQUFPLEdBQUcsVUFBQyxHQUFHLEVBQUUsSUFBUztZQUM5QixNQUFNLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO1FBQ3hGLENBQUMsQ0FBQTtJQWRELENBQUM7SUFMVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBSWMsaUJBQVU7T0FIeEIsV0FBVyxDQXFCdkI7SUFBRCxrQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmNvbnN0IHRva2VuS2V5ID0gXCJ0b2tlblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG4gIHB1YmxpYyB1cmw6c3RyaW5nID0gXCJodHRwOi8vZXdhbGxldC5zaW1iaW90aWt0ZWNoLmNvbS9hcHAvdXNlci9cIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpe1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBodHRwcG9zdCA9IChyZXFUeXBlLCBkYXRhOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsLmNvbmNhdChyZXFUeXBlKSwgZGF0YSlcclxuICAgICAgLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBodHRwZ2V0ID0gKHJlcSwgZGF0YTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybC5jb25jYXQocmVxKS5jb25jYXQoZGF0YSkpLm1hcCgocmVzOiBhbnkpID0+IHJlcy5qc29uKCkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19