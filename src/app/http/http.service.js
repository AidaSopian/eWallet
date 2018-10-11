"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var tokenKey = "token";
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.url = "http://ewallet.simbiotiktech.com/app/user/";
    }
    HttpService.prototype.posthttp = function (apiname, params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '' + apiname, params).subscribe(function (data) {
                resolve(data);
                //console.log(data);
            });
        });
    };
    HttpService.prototype.gethttp = function (apiname) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '' + apiname).subscribe(function (data) {
                resolve(data);
                //console.log(data);
            });
        });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQWtEO0FBQ2xELHNDQUEyQztBQUMzQyxpQ0FBK0I7QUFHL0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBR3pCO0lBSUUscUJBQW1CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFINUIsUUFBRyxHQUFVLDRDQUE0QyxDQUFDO0lBS2pFLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsT0FBTyxFQUFFLE1BQVc7UUFBN0IsaUJBUUM7UUFQQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPO1lBRXhCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO2dCQUNsRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2Qsb0JBQW9CO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkJBQU8sR0FBUCxVQUFRLE9BQU87UUFBZixpQkFRQztRQVBDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFFeEIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztnQkFDekQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNkLG9CQUFvQjtZQUN0QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTFCVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBS2MsaUJBQVU7T0FKeEIsV0FBVyxDQXNDdkI7SUFBRCxrQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5jb25zdCB0b2tlbktleSA9IFwidG9rZW5cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcclxuICBwdWJsaWMgdXJsOnN0cmluZyA9IFwiaHR0cDovL2V3YWxsZXQuc2ltYmlvdGlrdGVjaC5jb20vYXBwL3VzZXIvXCI7XHJcbiAgcHVibGljIHByb2ZpbGU6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpe1xyXG5cclxuICB9XHJcblxyXG4gIHBvc3RodHRwKGFwaW5hbWUsIHBhcmFtczogYW55KSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblxyXG4gICAgICB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCArICcnICsgYXBpbmFtZSwgcGFyYW1zKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldGh0dHAoYXBpbmFtZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG5cclxuICAgICAgdGhpcy5odHRwLmdldCh0aGlzLnVybCArICcnICsgYXBpbmFtZSkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBwdWJsaWMgaHR0cGdldChyZXEsIGRhdGE6IGFueSl7XHJcbiAgLy8gICAvL3RoaXMuaHR0cC5nZXQodGhpcy51cmwuY29uY2F0KHJlcSkuY29uY2F0KGRhdGEpKVxyXG4gIC8vICAgbGV0IF91cmwgPSB0aGlzLnVybC5jb25jYXQocmVxKS5jb25jYXQoZGF0YSk7XHJcbiAgLy8gICByZXR1cm4gZ2V0SlNPTihfdXJsKS50aGVuKChyOiBhbnkpID0+IHtcclxuICAvLyAgICAgY29uc29sZSxsb2coSlNPTi5zdHJpbmdpZnkocikpO1xyXG4gIC8vICAgfSwgKGUpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG59XHJcbiJdfQ==