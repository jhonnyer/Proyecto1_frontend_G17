import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  cliente:Cliente;
  id!:string;
  errores!:string[];
  httpHeaders:HttpHeaders=new HttpHeaders();
  token=sessionStorage.getItem('token');


  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute:ActivatedRoute){
    this.cliente=new Cliente(0,"","","","","");
    this.httpHeaders=this.httpHeaders.append("Authorization", "Bearer "+this.token);
  }
  ngOnInit(){
    this.getCliente();
  }

  create(){
    this.clienteService.create(this.cliente, this.httpHeaders).subscribe(
      response=> {
        console.log(response);
        this.router.navigate(['/clientes']);
        Swal.fire("Nuevo cliente", `${response.mensaje}`, 'success')
      },err=>{
        console.log("Error crear registro");
        console.log(err);
        this.errores=err;
      })
  }

  update(){
    this.clienteService.udpdate(this.cliente, this.httpHeaders).subscribe(
      response=> {
        console.log(response);
        this.router.navigate(['/clientes']);
        Swal.fire("Cliente actualizado", `${response.mensaje}`, 'success')
      },err=>{
        console.log("Error crear registro");
        console.log(err);
        this.errores=err;
      })
  }

  getCliente(){
    this.activatedRoute.params.subscribe(
      params=>{
        this.id=params['id'];
        this.clienteService.getCliente(this.id, this.httpHeaders).subscribe(
          cliente=>{
            this.cliente=cliente;
            console.log(this.cliente);
          }
        );
      }
    )
    
  }

}
