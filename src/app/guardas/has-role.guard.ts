import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  rol:string;
  roles:string[]
  auth:boolean;
  constructor(){
    this.rol="";
    this.roles=[]
    this.auth=false;
  }
  canActivate(
    route: ActivatedRouteSnapshot) {
      this.rol=sessionStorage.getItem("roles") ?? '';
      this.roles=this.rol.split(',');
      if(this.roles.includes(route.data['role'])){
        this.auth=true;
      }else{
        this.auth=false;
        Swal.fire("Error","No tiene permisos para acceder a este sitio","warning");
      }
    return this.auth;
  }
  
}
