import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listaCursos:string[];

  habilitar:boolean;

  constructor(){
    this.listaCursos=['Test Unitarios', 'WebFlux', 'Redux', 'Azure DevOps' ];
    this.habilitar=true;
  }


  sethabilitar():void{
    this.habilitar=(this.habilitar==true) ? false : true;
  }

  // sethabilitar():void{
  //   if(this.habilitar==true){
  //     this.habilitar=false;
  //   }else{
  //     this.habilitar=true;
  //   }
  //   console.log(this.habilitar);
  // }

}
