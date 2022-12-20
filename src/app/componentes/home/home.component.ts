import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicios/producto/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  listaCursos:string[];
  habilitar:boolean;

  title:string;
  curso:string;
  profesor:string

  filtroValor:string;
  productos:Producto[];

  formProducto:FormGroup;

  httpHeaders:HttpHeaders=new HttpHeaders();
  token=sessionStorage.getItem('token');

  constructor(private productoService:ProductoService, private formBuilder:FormBuilder){
    this.listaCursos=['Test Unitarios', 'WebFlux', 'Redux', 'Azure DevOps' ];
    this.habilitar=false;
    this.title="Proyecto Frontend Grupo 17";
    this.curso="Curso Programación web"
    this.profesor="Jhonnyer Fernando Galindez"
    this.filtroValor="";
    this.productos=[];
    this.httpHeaders=this.httpHeaders.append("Authorization", "Bearer "+this.token);
    this.formProducto=this.formBuilder.group({
      nombre:['',Validators.required],
      precio:[0,Validators.required]
    })
  }
  ngOnInit(): void {
    this.productos;
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

  generarFactura(){
    console.log(this.formProducto.value);
    console.log(this.formProducto.value.nombre);
    console.log(this.formProducto.value.precio);
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
