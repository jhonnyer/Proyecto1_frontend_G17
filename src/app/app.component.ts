import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title:string;

  curso:string;
  profesor:string

  constructor(){
    this.title="Proyecto Frontend Grupo 17";
    this.curso="Curso Programación web"
    this.profesor="Jhonnyer Fernando Galindez"
  }

}
