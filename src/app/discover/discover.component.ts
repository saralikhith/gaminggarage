import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../games-data.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(private gds:GamesDataService) { }
  games:any;
  ngOnInit(): void {
    this.gds.getGames().subscribe(
      data=>{
        this.games=data;
        console.log(this.games);
      } ,
      err=>{
        console.log("error in getting data ",err);
      }
    )
  }
  sports:any;
 sportsGames(){
    this.gds.getSports().subscribe(data=>{
      this.sports=data;
      console.log("sports data fetched")
    },
      err=>{
        console.log("err in getting sports",err);
      })
  }

}
