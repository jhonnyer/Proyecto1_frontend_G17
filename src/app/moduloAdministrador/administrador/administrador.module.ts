import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ],
  exports:[
    AdministradorRoutingModule
  ],
  providers: []
})
export class AdministradorModule { }
