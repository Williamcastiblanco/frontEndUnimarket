import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/ProductoGetDTO';
import { ProductoService } from 'src/app/servicios/producto.service';
@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
    textoBusqueda: string;
    productos: ProductoGetDTO[] = [];
    filtro: ProductoGetDTO[] = [];
    constructor(private route: ActivatedRoute, private productoService: ProductoService) {
        this.productoService.listar().subscribe({
            next: data => {
                this.productos = data.respuesta;
            }
        })
        this.filtro = [];
        this.textoBusqueda = "";
        this.route.params.subscribe(params => {
            this.textoBusqueda = params["texto"];
            this.filtro = this.productos.filter(p =>
                p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()));
        });
    }
}