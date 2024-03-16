import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl=`https://ecommerce.routemisr.com/api/v1/auth/`


  forgetPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post(this.baseUrl+`forgotPasswords`,userEmail)
  }
}
