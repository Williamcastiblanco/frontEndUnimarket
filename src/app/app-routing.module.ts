import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { CategoriasComponent } from './pagina/categorias/categorias.component';
import { BuscarComponent } from './pagina/buscar/buscar.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { ListarProductosComponent } from './pagina/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { DetalleProductoComponent } from './pagina/detalle-producto/detalle-producto.component';
import { GestionProductosComponent } from './pagina/gestion-productos/gestion-productos.component';
import { LoginGuard } from './guards/permiso.service';
import { DomicilioComponent } from './pagina/domicilio/domicilio.component';
import { RevisarProductosComponentComponent } from './pagina/revisar-productos-component/revisar-productos-component.component';
import { RolesGuard } from './guards/roles.service';
const routes: Routes = [
{ path: "", component: InicioComponent },
{ path: "domicilio", component: DomicilioComponent},
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{path: "Categorias",component:CategoriasComponent},
{path:"carrito",component:CarritoComponent},
{path:"Buscar",component:BuscarComponent},
{path:"Listar-productos",component:ListarProductosComponent},
{path: "crear-producto",component:CrearProductoComponent},
{ path: "busqueda/:texto", component: BusquedaComponent },
{path: "detalle-producto/:codigo", component: DetalleProductoComponent},
{ path: "editar-producto/:codigo", component: CrearProductoComponent },
{path: "gestion-productos",component: GestionProductosComponent},
{ path: "login", component: LoginComponent, canActivate: [LoginGuard] },
{ path: "registro", component: RegistroComponent, canActivate: [LoginGuard] },
{ path: "revisar-productos", component:RevisarProductosComponentComponent, canActivate: [RolesGuard],
data: { expectedRole: ["MODERADOR"] } },
{ path: "crear-producto", component: CrearProductoComponent, canActivate: [RolesGuard], data: {
    expectedRole: ["CLIENTE"] } },
    { path: "editar-producto/:codigo", component: CrearProductoComponent, canActivate:
    [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
    { path: "gestionar-productos", component: GestionProductosComponent, canActivate:
    [RolesGuard], data: { expectedRole: ["CLIENTE"] } },
{ path: "**", pathMatch: "full", redirectTo: "" }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }