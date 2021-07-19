import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userObj
  count
  constructor(private admin:AdminService,private us:UserService) { }

  ngOnInit(): void {
   this.userObj =JSON.parse(localStorage.getItem('userObj'))
  let username=localStorage.getItem('username')
   this.us.getProductsFromUserCart(username).subscribe(
     res=>{
       if(res.message=='cart is empty'){
             this.us.updateDataObservable(0)
       }
       else{
         this.us.updateDataObservable(res.message)
       }
       this.us.dataObservable.subscribe(
         prodObj=>{
           if(prodObj==0){
             this.count=0;
           }
           else{
             this.count=prodObj['products'].length;
           }


         }
       )
     }
   )
   
  }

}
