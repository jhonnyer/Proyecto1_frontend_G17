import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listaCursos:string[];
  habilitar:boolean;

  title:string;
  curso:string;
  profesor:string

  constructor(){
    this.listaCursos=['Test Unitarios', 'WebFlux', 'Redux', 'Azure DevOps' ];
    this.habilitar=false;
    this.title="Proyecto Frontend Grupo 17";
    this.curso="Curso Programación web"
    this.profesor="Jhonnyer Fernando Galindez"
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
