import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitanteRoutingModule } from './visitante-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VisitanteRoutingModule
  ], 
  exports:[
    VisitanteRoutingModule
  ], 
  providers:[]
})
export class VisitanteModule { }
