import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  localeEs from '@angular/common/locales/es';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


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
import { SearchProductoComponent } from './componentes/search-producto/search-producto.component';
import { LoginComponent } from './componentes/login/login.component';

//Guardas
import { LoginGuard } from './guardas/login.guard';
import { HasRoleGuard } from './guardas/has-role.guard';


registerLocaleData(localeEs,'es');

const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent },
  {path: 'clientes', component: ClientesComponent, canActivate:[LoginGuard, HasRoleGuard], data:{role:'ROLE_ADMIN'}},
  {path: 'clientes/form', component: FormClienteComponent, canActivate:[LoginGuard, HasRoleGuard], data:{role:'ROLE_ADMIN'} },
  {path: 'clientes/form/:id', component: FormClienteComponent, canActivate:[LoginGuard, HasRoleGuard],data:{role:'ROLE_ADMIN'}  },
  {path: 'contador', component: ContadorPadreComponent, canActivate:[LoginGuard, HasRoleGuard], data:{role:'ROLE_ADMIN'} },
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
    FormClienteComponent,
    SearchProductoComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    ClienteService, 
    {provide: LOCALE_ID, useValue:'es'},
    LoginGuard,
    HasRoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
