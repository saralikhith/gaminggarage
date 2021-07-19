import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private user:UserService,private router:Router) { }

  ngOnInit(): void {
  }

//get from data object


 file:File;
 selectFile(eventObj){
   this.file=eventObj.target.files[0]
 }

  userObj;

 
  onSubmit(ref){
          this.userObj=ref.value;

          //create form object
        let   formData=new FormData();

        //append file to form data
        formData.append('photo',this.file,this.file.name)

        //append userObj
        

        formData.append('userObj',JSON.stringify(this.userObj))



          this.user.onclickingSignUp(formData).subscribe(
            res=>{
                       if(res.message=='user created successfully'){
                         alert(res['message'])
                         //navigate to login component
                         this.router.navigateByUrl('/login')

                       }
                       else{
                         alert(res.message)
                       }
            },
            err=>{
              console.log(err.message)
              alert('err.message')
            }
          )

         
         
          

  }
}
