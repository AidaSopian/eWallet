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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWtEO0FBQ2xELHNDQUEyQztBQUMzQyxpQ0FBK0I7QUFDL0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBR3pCO0lBR0UscUJBQW1CLElBQWdCO1FBQW5DLGlCQUVDO1FBRmtCLFNBQUksR0FBSixJQUFJLENBQVk7UUFGNUIsUUFBRyxHQUFVLDRDQUE0QyxDQUFDO1FBTTFELGFBQVEsR0FBRyxVQUFDLE9BQU8sRUFBRSxJQUFTO1lBQ25DLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBRSxVQUFBLE9BQU87Z0JBQ3pCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQztxQkFDN0MsU0FBUyxDQUFDLFVBQUMsR0FBUTtvQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUE7UUFFRCxxQ0FBcUM7UUFDckMsbUlBQW1JO1FBQ25JLElBQUk7UUFFRyxZQUFPLEdBQUcsVUFBQyxHQUFHO1lBQ25CLE1BQU0sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUMzRSxDQUFDLENBQUE7SUFsQkQsQ0FBQztJQUxVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJYyxpQkFBVTtPQUh4QixXQUFXLENBeUJ2QjtJQUFELGtCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XHJcbiAgcHVibGljIHVybDpzdHJpbmcgPSBcImh0dHA6Ly9ld2FsbGV0LnNpbWJpb3Rpa3RlY2guY29tL2FwcC91c2VyL1wiO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCl7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIGh0dHBwb3N0ID0gKHJlcVR5cGUsIGRhdGE6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5odHRwLnBvc3QodGhpcy51cmwuY29uY2F0KHJlcVR5cGUpLCBkYXRhKVxyXG4gICAgICAuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUocmVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gcHVibGljIGh0dHBwb3N0ID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFwiaHR0cDovL2V3YWxsZXQuc2ltYmlvdGlrdGVjaC5jb20vYXBwL3VzZXIvcmVnaXN0ZXJcIiwgZGF0YSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge2NvbnNvbGUubG9nKHJlcyk7fSlcclxuICAvLyB9XHJcblxyXG4gIHB1YmxpYyBodHRwZ2V0ID0gKHJlcSkgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwuY29uY2F0KHJlcSkpLm1hcCgocmVzOiBhbnkpID0+IHJlcy5qc29uKCkpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19