import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  cliente1:Cliente;
  clientes:Cliente[];

  constructor(private clienteService: ClienteService){

    this.cliente1=new Cliente(1,'Jhonnyer','Galindez', 'jhonnyer@gmail.com','2022-12-09','');
    // this.cliente1={id: 1, nombre: 'Luis', apellido: 'Burbano', email:'luis@gmail.com',createAt:'2022-12-09',foto:''};
    this.clientes=[];
    // this.clientes=[
    //   {id: 1, nombre: 'Luis', apellido: 'Burbano', email:'luis@gmail.com',createAt:'2022-12-09',foto:''},
    //   {id: 2, nombre: 'Alexandra', apellido: 'Zalazar', email:'alexandra@gmail.com',createAt:'2022-12-09',foto:''},
    //   {id: 3, nombre: 'Fernando', apellido: 'Melendez', email:'fernando@gmail.com',createAt:'2022-12-09',foto:''},
    //   {id: 4, nombre: 'Ana', apellido: 'Erazo', email:'ana@gmail.com',createAt:'2022-12-09',foto:''},
    //   {id: 5, nombre: 'Eduardo', apellido: 'Bermudez', email:'eduardo@gmail.com',createAt:'2022-12-09',foto:''},
    //   {id: 6, nombre: 'Jesus', apellido: 'Zambrano', email:'jesus@gmail.com',createAt:'2022-12-09',foto:''},
    //   {id: 7, nombre: 'Daniel', apellido: 'Burbano', email:'daniel@gmail.com',createAt:'2022-12-09',foto:''},
    //   {id: 8, nombre: 'Angelica', apellido: 'Burbano', email:'angelica@gmail.com',createAt:'2022-12-09',foto:''},
    //   {id: 9, nombre: 'Luisa', apellido: 'Burbano', email:'luisa@gmail.com',createAt:'2022-12-09',foto:''},
    //   {id: 10, nombre: 'Sebastian', apellido: 'Burbano', email:'sebastian@gmail.com',createAt:'2022-12-09',foto:''},
    // ];
  }
  ngOnInit(){
    this.clienteService.getClientes().subscribe((clientes)=>{
      this.clientes=clientes;
      console.log(this.clientes);
    }, err=>{
      console.log("Error: "+err);
    });
  }

}
