import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ForgetpassService } from 'src/app/core/services/forgetpass.service';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {

  constructor(private _ForgetpassService:ForgetpassService){}

  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  email:string='';
  userMsg:string='';

  forgetForm:FormGroup=new FormGroup({

    email:new FormGroup('')
  })

  resetCodeForm:FormGroup=new FormGroup({

    resetCode:new FormGroup('')
  })

  resetPassword:FormGroup=new FormGroup({

    newPassword:new FormControl('')
  })


  forgetPassword():void{
    let userEmail=this.forgetForm.value
    this.email=userEmail.email;
    this._ForgetpassService.forgetPassword(userEmail).subscribe({
      next:(response)=>{
       this.userMsg=response.message;
      },
      error:(err)=>{
        this.userMsg=err.error.message;
      }
    })
  }


  resetCode():void{

  }


  newPassword():void{

  }
}
