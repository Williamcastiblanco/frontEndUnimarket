import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CategoriasComponent } from './pagina/categorias/categorias.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { BuscarComponent } from './pagina/buscar/buscar.component';
import { MediosDePagoComponent } from './pagina/medios-de-pago/medios-de-pago.component';
import { ListarProductosComponent } from './pagina/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    CategoriasComponent,
    CarritoComponent,
    BuscarComponent,
    MediosDePagoComponent,
    ListarProductosComponent,
    CrearProductoComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
