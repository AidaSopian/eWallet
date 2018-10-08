import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
const tokenKey = "token";

@Injectable()
export class HttpService {
  public url:string = "http://ewallet.simbiotiktech.com/app/user/";

  constructor(public http: HttpClient){

  }

  public httppost = (reqType, data: any) => {
    return new Promise( resolve => {
      this.http.post(this.url.concat(reqType), data)
      .subscribe((res: any) => {
        resolve(res);
        console.log(res);
      });
    });
  }

  public httpget = (req, data: any) => {
    return this.http.get(this.url.concat(req).concat(data)).map((res: any) => res.json());
  }

}
