import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { Routes,RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path:'', redirectTo: 'login', pathMatch:'full'
  },
  {path:'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'send-mail', component:SendMailComponent},
  {path: 'update-password',component:UpdatePasswordComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    SendMailComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ]
})
export class AuthModule { }
