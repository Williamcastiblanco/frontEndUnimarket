import { Component, OnInit } from '@angular/core';
import {ProductoDTO} from 'src/app/modelo/producto-dto';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivatedRoute } from '@angular/router';

export class AppModule { }
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})


export class CrearProductoComponent implements OnInit{
[x: string]: any;
  producto:ProductoDTO;
  archivos!:FileList;
  categorias:string[];
  seleccionadas:string[] = [];
  txtBoton: string='Crear Producto';
  constructor(private route:ActivatedRoute){
  this.categorias = [];
  this.producto=new ProductoDTO;
  this.route.params.subscribe(params => {
    this['codigoProducto'] = params["codigo"];
    let objetoProducto = this['productoService'].obtener(this['codigoProducto']);
    if(objetoProducto != null){
    this.producto = objetoProducto;
    this.txtBoton = 'Editar Producto';
    }
    });
  }
  opcionesSeleccionadas = [];
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


    onCheckboxChange(item:string, event:any){
      this.seleccionadas.push(item);
      console.log(this.seleccionadas);
    }

    
  }

