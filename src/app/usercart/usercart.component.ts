import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {

  constructor(private user:UserService) { }

  cartObj
  ngOnInit(): void {
  
    this.user.dataObservable.subscribe(
      res=>{
        if(res['message']=='cart is empty'){
          alert('cart is empty')
        }    
        else{
          this.cartObj=res;
        
        }      
      },
      err=>{
        console.log(err.message)
        alert('something went wrong in viewing products')
      }
    )
  }

}
