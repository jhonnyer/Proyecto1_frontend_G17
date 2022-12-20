import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-visitante',
  templateUrl: './navbar-visitante.component.html',
  styleUrls: ['./navbar-visitante.component.css']
})
export class NavbarVisitanteComponent {
  title:string="Visitante";
  authenticated:boolean;

  constructor(private router:Router){
    this.title="App G17";
    this.authenticated=false;
  }


  logout(){
    sessionStorage.clear();
    sessionStorage.setItem('authenticated',this.authenticated.toString());
    this.router.navigate(['/login']);
  }
}
