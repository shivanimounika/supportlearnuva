import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpCilent:HttpClient) {
    
   }
   login(data: any): Observable<any>{
      return this.httpCilent.post(`${environment.apiUrl}v1/users/login`,data);
    }
    register(data: any): Observable<any>{
      return this.httpCilent.post(`${environment.apiUrl}v1/users/register`,data);
    }
    sendForgotPasswordLinkMail(data: any): Observable<any>{
      return this.httpCilent.post(`${environment.apiUrl}v1/users/forgotPassword`,data);
    }
    updatePasswordLinkMail(data: any): Observable<any>{
      return this.httpCilent.post(`${environment.apiUrl}v1/users/updatePassword`,data);
    }
}
