import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CategoriasComponent } from './pagina/categorias/categorias.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { BuscarComponent } from './pagina/buscar/buscar.component';
import { ListarProductosComponent } from './pagina/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';    

//import { HttpClientModule } from '@angular/common/http';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { RevisarProductosComponentComponent } from './pagina/revisar-productos-component/revisar-productos-component.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';
import { DomicilioComponent } from './pagina/domicilio/domicilio.component';
HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CategoriasComponent,
    CarritoComponent,
    BuscarComponent,
    ListarProductosComponent,
    CrearProductoComponent,
    BusquedaComponent,
    DetalleProductoComponent,
    GestionProductosComponent,
    AlertaComponent,
    RevisarProductosComponentComponent,
    DomicilioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
