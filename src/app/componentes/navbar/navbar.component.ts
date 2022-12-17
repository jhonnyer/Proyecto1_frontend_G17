import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title:string;
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
