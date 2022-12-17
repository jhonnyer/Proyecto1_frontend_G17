import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild , AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/modelos/cliente';
import { ResponseCliente } from 'src/app/modelos/response-cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit{
  cliente1:Cliente;
  clientes:Cliente[];
  responseCliente!:ResponseCliente;

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email','createAt', 'acciones'];
  dataSource:MatTableDataSource<Cliente>;

  httpHeaders: HttpHeaders = new HttpHeaders();
  token = sessionStorage.getItem('token');

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  


  constructor(private clienteService: ClienteService){

    this.cliente1=new Cliente(1,'Jhonnyer','Galindez', 'jhonnyer@gmail.com','2022-12-09','');
    // this.cliente1={id: 1, nombre: 'Luis', apellido: 'Burbano', email:'luis@gmail.com',createAt:'2022-12-09',foto:''};
    this.clientes=[];
    this.dataSource=new MatTableDataSource<Cliente>([]);
    this.httpHeaders = this.httpHeaders.append('Authorization', 'Bearer ' + this.token);
  }
  ngAfterViewInit() {
    this.dataSource.paginator=this.paginator;
  }

  ngOnInit(){
    this.dataSource;
    console.log(this.token);
    this.clienteService.getClientes(this.httpHeaders).subscribe(clientes=>{
      this.clientes=clientes;
      this.dataSource.data=this.clientes;
      console.log(this.clientes);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  delete(cliente:Cliente){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Tu quieres revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id, this.httpHeaders).subscribe(
          response=>{
            console.log(response);
            this.responseCliente=response;
            this.clientes=this.clientes.filter(cli=> cli!==cliente)
            this.dataSource.data=this.clientes;
            Swal.fire(
              'Eliminado!',
              ''+this.responseCliente.mensaje,
              'success'
            )
          }
        )
      }
    })
  }

}
