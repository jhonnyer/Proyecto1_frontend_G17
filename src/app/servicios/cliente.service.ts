import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, catchError, throwError, map, tap } from 'rxjs';
import { Cliente } from '../modelos/cliente';
import { ResponseCliente } from '../modelos/response-cliente';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private UrlClient:string; 

  private httpHeaders:HttpHeaders;

  constructor(private http: HttpClient, private router:Router) {
    this.UrlClient="http://localhost:8080/cliente/";
    this.httpHeaders=new HttpHeaders({"Content-Type":"application/json"});
   }

   getCliente(id:string, httpHeaders:HttpHeaders):Observable<Cliente>{
      return this.http.get<Cliente>(`${this.UrlClient+"findOne"}/${id}`, {headers:httpHeaders});
   }

   getClientes(httpHeaders:HttpHeaders):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.UrlClient+"listar", {headers:httpHeaders}).pipe(
      tap(response=>{
         console.log("TAB 1");
         let cliente=response as Cliente[];
         cliente.forEach(
            t=>{
               console.log(t);
            }
         )
      }),
      map(response => {
         console.log("TRANSFORMACION DATA");
         let clientes=response as Cliente[];
         return clientes.map(
            cliente=>{
               cliente.nombre=cliente.nombre.toUpperCase();
               // cliente.createAt=formatDate(cliente.createAt,'dd/MM/yyyy','en-US');
               cliente.createAt=formatDate(cliente.createAt,'fullDate','es');
               return cliente;
            });
      }),
      tap(response=>{
         console.log("TAB 2");
         response.forEach(
            t=>{
               console.log(t);
            }
         )
      }),
    );
   }

   create(cliente:Cliente, httpHeaders:HttpHeaders):Observable<ResponseCliente>{
      return this.http.post<ResponseCliente>(this.UrlClient+"save", cliente, {headers:httpHeaders}).pipe(
         catchError(e=>{
            this.router.navigate(['/clientes']);
            console.log(e.error.mensaje);
            Swal.fire("Error al crear un nuevo registro",""+e.error.mensaje, 'error');
            return throwError(e);
         })
      );
   }

   udpdate(cliente:Cliente, httpHeaders:HttpHeaders):Observable<ResponseCliente>{
    return this.http.put<ResponseCliente>(`${this.UrlClient+"save"}/${cliente.id}`, cliente, {headers:httpHeaders});
   }

   delete(id:number, httpHeaders:HttpHeaders):Observable<ResponseCliente>{
      return this.http.delete<ResponseCliente>(`${this.UrlClient+"delete"}/${id}`, {headers:httpHeaders});
   }
}
