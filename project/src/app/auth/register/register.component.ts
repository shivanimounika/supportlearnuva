import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup=this.formBuilder.group({
    email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]],
    password:['',[Validators.required, Validators.minLength(5)]]
  })
  constructor(
    private formBuilder: FormBuilder,
    private authservice:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  registerCTA():void{
    this.authservice.register(this.registerForm.value).subscribe(res=>{
      if(res && res.data){
        localStorage.setItem('token',res.data.toker);
        this.router.navigate(['/core']);
      }
    },(error:any) =>{
      console.log(error);
      if(error && error.error && 'Mobile not registered' === (error.error.errorDescription)){
        this.registerForm.value.controls.mobilenumber.setErrors({mobileAlreadyExists:true});
      }else if(error && error.error && 'Incorrect password' === error.error.errorDescription){
        this.registerForm.value.controls.password.setErrors({passwordNotExists:true});
      }
    });
  }
  createRegisterForm():void{
    this.registerForm = this.formBuilder.group({
      email:['',[Validators.required]],
      mobile:['',[Validators.required]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(5)]]
    })
  }

}
