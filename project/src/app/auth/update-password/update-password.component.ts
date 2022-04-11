import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  message:any;
  queryParams:any;
  updatePasswordForm : FormGroup = this.formBuilder.group({
    // email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]],
    // password:['',[Validators.required, Validators.minLength(5)]]
    // forgotpassword:['',[Validators.required,]],
    // mobilenumber: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private authservice:AuthService,
              private router:Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.createUpdatePasswordForm();
    this.activatedRoute.queryParams.subscribe(params=>{
    this.queryParams = params;
    }
    )};
  updatePasswordCTA():void{
    this.authservice.sendForgotPasswordLinkMail((this.updatePasswordForm.value,this.queryParams)).subscribe(res =>{
      if(res && res.data && res.data.accepted && res.data.accepted.length){
        this.message = 'updated the  password succesfully';
        this.router.navigate(['/login']);
      }
    },(error: any)=>{
      console.log(error);
      if(error && error.error && error.error === 'invalid_request'){
        this.message = error.errorDescription;
      }else if(error && error.error && error.error === 'invalid_request'){
          this.message = error.errorDescription;
      }
    });
  }
  createUpdatePasswordForm():void{
    this.updatePasswordForm = this.formBuilder.group({
      password:['',[Validators.required]]
    })
  }
}

