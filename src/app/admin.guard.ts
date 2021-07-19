import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let username=localStorage.getItem('username')
    
    if("username=='likhith' || username=='pooja'"){

      return true;
      
         
           
           
    }
    else{
      alert('unauthorized access')

      this.router.navigateByUrl('/PagenotfoundComponent')
     
           return false
    }
  }
  
}
