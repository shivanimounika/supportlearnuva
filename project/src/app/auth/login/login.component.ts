import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm : FormGroup = this.formBuilder.group({
    email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]],
    password:['',[Validators.required, Validators.minLength(5)]]
    // forgotpassword:['',[Validators.required,]],
    // mobilenumber: ['', Validators.required]
  });

  
  constructor(private formBuilder: FormBuilder,private authservice:AuthService,private router:Router){}

  ngOnInit(): void {
  }
  login():void{
    console.log(this.loginForm.value);
    this.authservice.login(this.loginForm.value).subscribe((data: any)=>{
      if(data){
        
      }else{

      }
    },(error: any)=>{
      console.log(error);
      if(error && error.error && 'Mobile not registered' === (error.error.errorDescription)){
        this.loginForm.value.controls.mobilenumber.setErrors({mobileNotExists:true});
      }else if(error && error.error && 'Incorrect password' === error.error.errorDescription){
        this.loginForm.value.controls.password.setErrors({passwordNotExists:true});
      }
    });
  }
  get f(): any {
    return this.loginForm.controls;
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
}


