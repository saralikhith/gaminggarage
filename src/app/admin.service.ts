import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private hc:HttpClient) { }

  dataSource=new BehaviorSubject<any>(0);

  //extract observable from it
   dataObservable=this.dataSource.asObservable();

   updateDataObservable(data){
     this.dataSource.next(data)
   }


  addProductstoProdCollection(userObj):Observable<any>{
        return this.hc.post('/products/addproducts',userObj)
  }
  getProducts():Observable<any>{
    return this.hc.get('/products/getproducts')
  }
  
  onDeletionOfProducts(game):Observable<any>{
    return this.hc.delete(`/products/deleteproduct/${game.title}`)
  }

}
