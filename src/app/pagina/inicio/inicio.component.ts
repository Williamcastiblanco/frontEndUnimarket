import { Component } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/ProductoGetDTO';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  
  productos:ProductoGetDTO[]=[];
  router: any;

  constructor(private productoService:ProductoService){
    //this.productoService.listar().subscribe({
      //next: data => {
        //this.productos = data.respuesta;
      //}
    //})

    this.productoService.listarProductos().subscribe({
      next: data =>{
        this.productos = data.respuesta;
      },
      error: err =>{
        console.log(err.error)
      }
    })
  }
}
