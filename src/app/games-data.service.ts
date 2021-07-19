import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GamesDataService {

  constructor(private hc:HttpClient) { }

 
  getGames():Observable<any>{
    //const headers=
    return this.hc.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {"headers" :{
      "x-rapidapi-key": "306d8eafe3msh6d0ac52b8ba9e84p1b5bc2jsn555ccd3cdac6",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
     // "useQueryString": true
    }
  });
  }
  getSports():Observable<any>{
    return this.hc.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{"headers" :{
      "x-rapidapi-key": "306d8eafe3msh6d0ac52b8ba9e84p1b5bc2jsn555ccd3cdac6",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com", },params:{	"category": "shooter"}})
    }

    onClick(data):Observable<any>{
      return this.hc.post('/contact-us',data)

    }

}