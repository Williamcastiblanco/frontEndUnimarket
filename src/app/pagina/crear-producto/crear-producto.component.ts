import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivatedRoute } from '@angular/router';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from 'src/app/servicios/producto.service';

export class AppModule { }
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})


export class CrearProductoComponent implements OnInit {
  [x: string]: any;
  producto: ProductoDTO;
  archivos!: FileList;
  categorias: string[];
  seleccionadas: string[] = [];
  opcionesSeleccionadas = [];
  txtBoton: string = 'Crear Producto';
  constructor(private route: ActivatedRoute, private imagenService: ImagenService, private categoriaService: CategoriaService,private productoService: ProductoService) {
    this.categorias = [];
    this.producto = new ProductoDTO;
    this.route.params.subscribe(params => {
      this['codigoProducto'] = params["codigo"];
      let objetoProducto = this['productoService'].obtener(this['codigoProducto']);
      if (objetoProducto != null) {
        this.producto = objetoProducto;
        this.txtBoton = 'Editar Producto';
      }
    });
  }

  public crearProducto() {
    if (this.producto.imagenes.length > 0) {
      this.productoService.crear(this.producto).subscribe({
        next: data => {
          console.log(data.respuesta);
        },
        error: error => {
          console.log(error.error);
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }
  ngOnInit(): void {
    this.categoriaService.listar().subscribe({
      next: data => {
        this.categorias = data.respuesta;
      },
      error: error => {
        console.log(error.error);
      }
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.archivos = event.target.files;
    }
  }


  onCheckboxChange(item: string, event: any) {
    this.seleccionadas.push(item);
    console.log(this.seleccionadas);
  }

  private cargarCategorias() {

  }//se estaban quemando la categoria en ongit preguntar que hacer

  public subirImagenes() {
    if (this.archivos != null && this.archivos.length > 0) {
      const objeto = this.producto;
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
      this.imagenService.subir(formData).subscribe({
        next: data => {
          objeto.imagenes.push(data.respuesta.url);
        },
        error: error => {
          console.log(error.error);
        }
      });
    } else {
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }
}

