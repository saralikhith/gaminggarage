import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../games-data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  searchItem:String;
  constructor(private gds:GamesDataService) { }

  p:number=1
  games:any;
  ngOnInit(): void {
    this.gds.getGames().subscribe(
      data=>{
        this.games=data;
      },
      err=>{
        console.log("error in getting games data in browse",err);
      }
      )
  }

}
