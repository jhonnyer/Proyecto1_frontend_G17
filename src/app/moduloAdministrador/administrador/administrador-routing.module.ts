import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from 'src/app/componentes/clientes/clientes.component';
import { HomeComponent } from 'src/app/componentes/home/home.component';
import { FormClienteComponent } from 'src/app/formularios/form-cliente/form-cliente.component';
import { HomeAdministradorComponent } from '../componentes/home-administrador/home-administrador.component';

const routes: Routes =[

  {path: 'gestion', component:HomeAdministradorComponent,
    children: [
      {path: 'clientes', component: ClientesComponent},
      {path: 'clientes/form', component: FormClienteComponent,  },
      {path: 'clientes/form/:id', component: FormClienteComponent }  
    ]
  },
  {path:'cursos', component:HomeAdministradorComponent,
    children:[
      {path:'home',component:HomeComponent},
    ]
  }, 
  {path:'**', component:HomeAdministradorComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
