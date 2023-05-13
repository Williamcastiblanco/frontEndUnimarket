import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CategoriasComponent } from './pagina/categorias/categorias.component';
import { BuscarComponent } from './pagina/buscar/buscar.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { ListarProductosComponent } from './pagina/listar-productos/listar-productos.component';
import { MediosDePagoComponent } from './pagina/medios-de-pago/medios-de-pago.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';

const routes: Routes = [

{ path: "", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{path: "Categorias",component:CategoriasComponent},
{path:"Carrito",component:CarritoComponent},
{path:"Buscar",component:BuscarComponent},
{path:"Listar-productos",component:ListarProductosComponent},
{path:"Medios-de-pago",component:MediosDePagoComponent},
{path:"busqueda/:texto",component:BusquedaComponent},
{path:"crear-producto",component:CrearProductoComponent},
{ path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }