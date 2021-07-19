import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService implements HttpInterceptor {
    
  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
           let token=localStorage.getItem('token')
           if(token!==null){
          const clonedObj = req.clone({
           headers: req.headers.set("AUTHORIZATION",`Bearer ${token}`)

          })
          return next.handle(clonedObj)
           }
           else{
             //if token not existed
            return next.handle(req)
           }
  }
  constructor() { }
}
