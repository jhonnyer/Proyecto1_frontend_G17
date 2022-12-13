import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador-hijo',
  templateUrl: './contador-hijo.component.html',
  styleUrls: ['./contador-hijo.component.css']
})
export class ContadorHijoComponent implements OnInit{
  @Input() contador:number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor(){
    this.contador=0;
  }
  ngOnInit(): void {
    console.log(this.contador);
  }

  multiplicar(){
    this.contador=this.contador*2;
    this.cambioContador.emit(this.contador);
  }

  dividir(){
    this.contador=this.contador/4;
    this.cambioContador.emit(this.contador);
  }

  resetarNuevo(nuevoContador:number){
    this.contador=nuevoContador;
    console.log(this.contador);
    this.cambioContador.emit(this.contador);
  }
}
