import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorPadreComponent } from 'src/app/componentes/contador-padre/contador-padre.component';
import { HomeComponent } from 'src/app/componentes/home/home.component';
import { HomeVisitanteComponent } from '../../componentes/home-visitante/home-visitante.component';

const routes: Routes = [
  {path:'user', component:HomeVisitanteComponent,
    children:[
      {path: 'contador', component: ContadorPadreComponent },
    ]
  },
  { path:'home', component:HomeComponent },
  { path:'**', component:HomeVisitanteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitanteRoutingModule { }
