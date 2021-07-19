import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(private router:Router, private prObj:AdminService) { }

  ngOnInit(): void {
  }

  file:File;
  selectImage(eventObj){
    this.file= eventObj.target.files[0]
  }

  onClickOnAddProduct(ref){
    let prodObj=ref.value;

 

   //get username
   let username=localStorage.getItem('username')




   //make post req to product api
   this.prObj.addProductstoProdCollection(prodObj).subscribe(
     res=>{
         if(res.message=='product created successfully'){
                 alert('product added')
                 //navigate to view products

                 this.router.navigateByUrl(`admin/${username}/browse`)

         }
         else if(res.message=="session expired .... login to continue"){
          this.router.navigateByUrl('/login')
         }
         else{
           alert(res.message)
         }
     },
     err=>{
        console.log(err)
        alert('something went wrong in adding products')
     }
   )

}
}


