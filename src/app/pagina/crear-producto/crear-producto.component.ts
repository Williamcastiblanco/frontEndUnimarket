import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDTO } from 'src/app/modelo/ProductoDTO';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
  
})
export class CrearProductoComponent implements OnInit{

  private route:ActivatedRoute;
  esEdicion:boolean=false;
  producto:ProductoDTO;
  archivos!:FileList;


  public crearProducto(){
    if(this.archivos != null && this.archivos.length > 0){
    console.log(this.producto);
    }else{
    console.log('Debe seleccionar al menos una imagen');
    }
    }
    onFileChange(event:any){
    if (event.target.files.length > 0) {
    const files = event.target.files;
    console.log(files);
    }
    }

      categorias:string[];


    constructor(route:ActivatedRoute ){
    this.categorias = [];
    this.route=route;
    this.producto=new ProductoDTO;
    }

      ngOnInit(): void {
        this.categorias.push('Tecnología');
        this.categorias.push('Hogar');
        this.categorias.push('Deportes');
        this.categorias.push('Moda');
        this.categorias.push('Mascotas');
      }

}
