import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-padre',
  templateUrl: './contador-padre.component.html',
  styleUrls: ['./contador-padre.component.css']
})
export class ContadorPadreComponent {
  contador:number;

  constructor(){
    this.contador=10;
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }

}
