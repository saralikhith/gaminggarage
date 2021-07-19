import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userLogin:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  loginObj;
  onLogin(ref){
          this.loginObj=ref.value;

          this.userLogin.onLogin(this.loginObj).subscribe(
            res=>{
                       if(res.message=='user login success'){
                         alert('login successs')
                         localStorage.setItem('username',res.username)
                         localStorage.setItem('token',res.token)
                         localStorage.setItem('userObj',JSON.stringify(res.userObj))
                         //navigate to user profile
                         this.router.navigateByUrl(`userprofile/${res.username}`)
                         //whenever login is success logout should be appeared
                         this.userLogin.loginStatus=true;
                       }
                       else if(res.message=='admin login success'){
                        alert('login successs')
                        localStorage.setItem('username',res.username)
                        localStorage.setItem('token',res.token)
                        localStorage.setItem('userObj',JSON.stringify(res.userObj))
                           //navigate to user profile
                             this.router.navigateByUrl(`/admin/${res.username}`)
                                 //whenever login is success logout should be appeared
                                 this.userLogin.loginStatus=true;
                       }
                       else{
                         alert(res.message)
                       }
            },
            err=>{
              console.log(err)
              alert(err.message)
            }
          )
          
  }

}
