import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private gd:GamesDataService,private router:Router) { }

  ngOnInit(): void {
  }
message
  onClickMessage(ref){
        this.message=ref.value;
     
        this.gd.onClick(this.message).subscribe(
          res=>{
            if(res.message='issue saved'){
              alert('we have recieved your message')
              this.router.navigateByUrl('/contact')
            }
              
          },
          err=>{
            console.log('error at contact us info',err.message)
          }
        )


  }

}
