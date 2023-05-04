import { Component, OnInit } from '@angular/core';
import {ProductoDTO} from 'src/app/modelo/producto-dto';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})


export class CrearProductoComponent implements OnInit{
  producto:ProductoDTO;
  archivos!:FileList;
  categorias:string[];
  constructor(){
  this.categorias = [];
  this.producto=new ProductoDTO;
  }


  public crearProducto(){
    if(this.archivos != null && this.archivos.length > 0){
    console.log(this.producto);
    }else{
    console.log('Debe seleccionar al menos una imagen');
    }
    }
  ngOnInit(): void {
    this.categorias.push('Tecnología');
    this.categorias.push('Hogar');
    this.categorias.push('Deportes');
    this.categorias.push('Moda');
    this.categorias.push('Mascotas');
  }
  onFileChange(event:any){
    if (event.target.files.length > 0) {
    const files = event.target.files;
    this.archivos = event.target.files;
    }
    }

    
  }

