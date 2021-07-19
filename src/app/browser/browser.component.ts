import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { GamesDataService } from '../games-data.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {
  searchItem:String;
  constructor(private gds:GamesDataService,public us:UserService,private admin:AdminService,private router:Router) { }

  p:number=3
  games:any;
  game
  username
  ngOnInit(): void {
    this.username=localStorage.getItem('username')


      this.admin.getProducts().subscribe(
        res=>{
              
              this.admin.updateDataObservable(res.message)
              this.admin.dataObservable.subscribe(
                prodObj=>{
                      
                        this.game=prodObj
                }
              )
              
              
        },
        err=>{
          console.log("error in getting games data in browse",err);
        }
      )
  }
  onDelete(game){
    console.log(game)
          this.admin.onDeletionOfProducts(game).subscribe(
            res=>{
              alert(res.message)
              this.admin.updateDataObservable(res.newProducts)
            },
            err=>{
              console.log(err.message)
               
              alert('something went wrong on deleting product')
            }
          )   
  }

  onProductSelection(gameObj){

    let username=localStorage.getItem('username')
    let prodObj={username,gameObj}

    this.us.onProductSelection(prodObj).subscribe(
      res=>{
            alert(res.message)
            this.us.updateDataObservable(res.latestData)
            
            this.router.navigateByUrl(`/userprofile/${username}/gamesincart`)
            
      },
      err=>{
        console.log(err.message)
               
        alert('something went wrong on selecting product')
      }
    )

  }

}
