import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ServicesInvokeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesInvokeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesInvokeProvider Provider');
  }

//LOGIN
  public getLoginData(url,username,password){
    return new Promise(
      resolve=>{
        this.http.post(url,{email:username,password:password})
        .map(res=>res)
        .subscribe(data=>{
          resolve(data);
        });
      }

    );
  }

  public getBySearch(url,searchText){
    return new Promise(
      resolve=>{
        this.http.get(url+"?q="+searchText+"&APPID=50cb6078ea20838f3e2a610ea7a097f4")
        .map(res=>res)
        .subscribe(data=>{
          resolve(data);
        });
      }
    );
  }

  public getNovedades(){
    return new Promise(
      resolve=>{
        this.http.get("")
          .map(res=>res)
          .subscribe(data=>{
            resolve(data);
          });
      }

    )
  }
}
