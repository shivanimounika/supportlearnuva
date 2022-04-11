import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  message:any;
  sendMailForm : FormGroup = this.formBuilder.group({
    // email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]],
    // password:['',[Validators.required, Validators.minLength(5)]]
    // forgotpassword:['',[Validators.required,]],
    // mobilenumber: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.createForgotPasswordForm();
  }
  sendMailCTA():void{
    this.authservice.sendForgotPasswordLinkMail(this.sendMailForm.value).subscribe(res =>{
      if(res && res.data && res.data.accepted && res.data.accepted.length){
        this.message = 'update password link sent to your email';
      }
    },(error: any)=>{
      console.log(error);
      if(error && error.error && 'Mobile not registered' === (error.error.errorDescription)){
        this.sendMailForm.value.controls.email.setErrors({emailNotExists:true});
      }
    });
  }
  createForgotPasswordForm():void{
    this.sendMailForm = this.formBuilder.group({
      email:['',[Validators.required]]
    })
  }
}

