import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { ProductoGetDTO } from 'src/app/modelo/ProductoGetDTO';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {
  producto: ProductoDTO;
  productos: ProductoGetDTO[];
  seleccionados: ProductoGetDTO[];
  textoBtnEliminar: string = "";
  idUsuario:number;
  codigoProducto: number = 0;
  constructor(private route: ActivatedRoute,private productoServicio: ProductoService,private router:Router) {
    this.productos = [];
    this.seleccionados=[];
    this.textoBtnEliminar="";
    this.idUsuario = 1;
    this.producto = new ProductoDTO();

    this.productoServicio.listarProductos().subscribe({
      next: data => {

        this.productos = data.respuesta;
        console.log("pro: " + this.productos);
      },
      error: err => {
        console.log(err.error);
      }

    });
  }
  ngOnInit(): void {
  }
  public seleccionar(producto: ProductoGetDTO, estado: boolean) {
    if (estado) {
      this.seleccionados.push(producto);
    } else {
      this.seleccionados = this.seleccionados.filter(i => i != producto);
    }
    this.actualizarMensaje();

  }
  private actualizarMensaje() {
    const tam = this.seleccionados.length;
    if (tam != 0) {
      if (tam == 1) {
        this.textoBtnEliminar = "1 elemento";
      } else {
        this.textoBtnEliminar = tam + " elementos";
      }
    } else {
      this.textoBtnEliminar = "";
    }
  }
  public borrarProductos(){
    this.seleccionados.forEach(e => {
    this.productos = this.productos.filter(i => i != e);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
    }
}