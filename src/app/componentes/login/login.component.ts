import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/modelos/ILogin';
import { IResponseLogin } from 'src/app/modelos/IResponse';
import { LoginService } from 'src/app/servicios/Login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public formLogin:FormGroup;
  usuario:ILogin;
  responseLogin!:IResponseLogin;
  authenticated:boolean;
  token:string;
  @Output('authenticated') isAuthenticated=new EventEmitter<boolean>();
  roles:string[];
  rol:string;

  constructor( formBuilder:FormBuilder , private loginService:LoginService, private router:Router){
    this.formLogin=formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required],
    });
    this.usuario={username:"",password:""};
    this.authenticated=false;
    this.token="";
    this.roles=[];
    this.rol="";
  }

  Login(){
    this.usuario={username:this.formLogin.value.username, password:this.formLogin.value.password}
    console.log(this.usuario);
    this.loginService.getLogin(this.usuario).subscribe(
      response=>{
        this.token=response.token;
        sessionStorage.setItem('token',this.token);
        sessionStorage.setItem('roles',response.roles);
        this.authenticated=true;
        sessionStorage.setItem('authenticated',this.authenticated.toString());
        this.isAuthenticated.emit(this.authenticated);
        this.roles=response.roles;
        
        this.roles.forEach(t=>{
          switch(t){
            case "ROLE_ADMIN":
              this.router.navigate(['/administrador/gestion/clientes']);
              break;
            case "ROLE_USER":
              this.router.navigate(['/visitante/user/contador']);
              break;
            default:
              break;
          }
        });
        
        },err=>{
          Swal.fire("Error", "Usuario o contraseña invalida", 'error');
          this.formLogin.reset();
          sessionStorage.setItem('authenticated',this.authenticated.toString());
        }
      )}

    
}
