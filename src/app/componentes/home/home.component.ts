import { Component } from '@angular/core';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicios/producto/producto.service';

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

  filtroValor:string;
  productos:Producto[];

  constructor(private productoService:ProductoService){
    this.listaCursos=['Test Unitarios', 'WebFlux', 'Redux', 'Azure DevOps' ];
    this.habilitar=false;
    this.title="Proyecto Frontend Grupo 17";
    this.curso="Curso Programación web"
    this.profesor="Jhonnyer Fernando Galindez"
    this.filtroValor="";
    this.productos=[];
  }


  sethabilitar():void{
    this.habilitar=(this.habilitar==true) ? false : true;
  }


  handleSearch(value:string){
    this.filtroValor=value;
    console.log(this.filtroValor);
    this.productoService.getProducto(this.filtroValor).subscribe(
      producto=>{
        this.productos=producto;
        console.log(this.productos);
      }
    )
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
