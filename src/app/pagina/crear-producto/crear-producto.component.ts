import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{

    onFileChange(event:any){
    if (event.target.files.length > 0) {
    const files = event.target.files;
    console.log(files);
    }
    }

      categorias:string[];
    constructor(){
    this.categorias = [];
    }

      ngOnInit(): void {
        this.categorias.push('Tecnología');
        this.categorias.push('Hogar');
        this.categorias.push('Deportes');
        this.categorias.push('Moda');
        this.categorias.push('Mascotas');
      }

}
