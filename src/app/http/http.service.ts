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
    return this.http.post(this.url.concat(reqType), data).subscribe((res: any) => {console.log(res);})
  }

  // public httppost = (data: any) => {
  //   return this.http.post("http://ewallet.simbiotiktech.com/app/user/register", data).subscribe((res: any) => {console.log(res);})
  // }

  public httpget = (req) => {
    return this.http.get(this.url.concat(req)).map((res: any) => res.json());
  }

}
