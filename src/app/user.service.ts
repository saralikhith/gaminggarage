import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
 
  dataSource=new BehaviorSubject(0);

  dataObservable= this.dataSource.asObservable();

  updateDataObservable(data){
    this.dataSource.next(data)
  }
  constructor(private hc:HttpClient) {
   if(localStorage.getItem('username')!==null){
             this.loginStatus=true;
   }
   }

   
  loginStatus:boolean=false



    onclickingSignUp(userObj):Observable<any>{
           return this.hc.post('/user/createuser',userObj)
    }

    onLogin(loginObj):Observable<any>{
      return this.hc.post('/login',loginObj)
    }

    onProductSelection(prodObj):Observable<any>{
      return this.hc.post('/user/add-to-cart',prodObj)
    }

    getProductsFromUserCart(username):Observable<any>{
      return this.hc.get(`/user/getproducts/${username}`)
    }
}
