import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import  localeEs from '@angular/common/locales/es';


//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ContadorPadreComponent } from './componentes/contador-padre/contador-padre.component';
import { ContadorHijoComponent } from './componentes/contador-hijo/contador-hijo.component';
import { ContadorNietoComponent } from './componentes/contador-nieto/contador-nieto.component';
import { FormClienteComponent } from './formularios/form-cliente/form-cliente.component';

//Servicios
import { ClienteService } from './servicios/cliente.service';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs,'es');

const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'clientes', component: ClientesComponent },
  {path: 'clientes/form', component: FormClienteComponent },
  {path: 'clientes/form/:id', component: FormClienteComponent },
  {path: 'contador', component: ContadorPadreComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ClientesComponent,
    ContadorPadreComponent,
    ContadorHijoComponent,
    ContadorNietoComponent,
    FormClienteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ClienteService, {provide: LOCALE_ID, useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
