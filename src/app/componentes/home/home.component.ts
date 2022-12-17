import { HttpHeaders } from '@angular/common/http';
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

  httpHeaders:HttpHeaders=new HttpHeaders();
  token=sessionStorage.getItem('token');

  constructor(private productoService:ProductoService){
    this.listaCursos=['Test Unitarios', 'WebFlux', 'Redux', 'Azure DevOps' ];
    this.habilitar=false;
    this.title="Proyecto Frontend Grupo 17";
    this.curso="Curso Programación web"
    this.profesor="Jhonnyer Fernando Galindez"
    this.filtroValor="";
    this.productos=[];
    this.httpHeaders=this.httpHeaders.append("Authorization", "Bearer "+this.token);
  }


  sethabilitar():void{
    this.habilitar=(this.habilitar==true) ? false : true;
  }


  handleSearch(value:string){
    this.filtroValor=value;
    console.log(this.filtroValor);
    this.productoService.getProducto(this.filtroValor, this.httpHeaders).subscribe(
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
