import { Component } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent {

  cliente:Cliente;

  constructor(private clienteService: ClienteService, private router: Router){
    this.cliente=new Cliente(0,"","","","","");
  }

  create(){
    console.log("click en el formulario");
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      response=> {
        console.log(response);
        this.router.navigate(['/clientes']);
        Swal.fire("Nuevo cliente", `${response.mensaje}`, 'success')
      })
  }

}
