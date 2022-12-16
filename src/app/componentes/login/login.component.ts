import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from 'src/app/modelos/ILogin';
import { IResponseLogin } from 'src/app/modelos/IResponse';
import { LoginService } from 'src/app/servicios/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public formLogin:FormGroup;
  usuario:ILogin;
  responseLogin!:IResponseLogin;
  constructor( formBuilder:FormBuilder , private loginService:LoginService){
    this.formLogin=formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required],
    });
    this.usuario={username:"",password:""};
  }

  Login(){
    this.usuario={username:this.formLogin.value.username, password:this.formLogin.value.password}
    this.loginService.getLogin(this.usuario).subscribe(
      Response=>{
        console.log(Response);
      }
    )
  }
}
