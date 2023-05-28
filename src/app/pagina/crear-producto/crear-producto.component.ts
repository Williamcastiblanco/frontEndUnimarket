import { Component, OnInit } from '@angular/core';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { ActivatedRoute } from '@angular/router';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Alerta } from 'src/app/modelo/alerta';

export class AppModule { }
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})


export class CrearProductoComponent implements OnInit {

  categorias: Categoria[] = [
    {label:'Tecnologia',name:'TECNOLOGIA',checked:false},
    {label:'Hogar',name:'HOGAR',checked:false},
    {label:'Moda',name:'MODA',checked:false},
    {label:'Mascotas',name:'MASCOTAS',checked:false},
    {label:'Ropa',name:'ROPA',checked:false},
    {label:'Deporte',name:'DEPORTE',checked:false}
    
  ];

  producto: ProductoDTO;
  archivos!: FileList;
 // categorias: string[];
  seleccionadas: string[] = [];
  opcionesSeleccionadas = [];
  txtBoton: string = 'Crear Producto';
  codigoProducto:number = 0;
  esEdicion: boolean = false;
  alerta!: Alerta;


  constructor(private productoService: ProductoService, private route: ActivatedRoute,
    private imagenService: ImagenService, private categoriaService: CategoriaService) {
    //this.categorias = [];
    this.producto = new ProductoDTO();

    this.route.params.subscribe(params => {
      this.codigoProducto = params["codigo"];
      let objetoProducto = this.productoService.obtener(this.codigoProducto);
      if (objetoProducto != null) {
        this.producto = objetoProducto;
        this.esEdicion = true;
        this.txtBoton = 'Editar Producto';
      }
    });

    if(this.esEdicion){
      this.cargarCategorias();
    }
  }

  public crearProducto() {
    if (this.producto.imagenes.length > 0) {
      this.producto.codigoVendedor = 1;
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
  //ngOnInit(): void {
    //this.categoriaService.listar().subscribe({
      //next: data => {
        //this.categorias = data.respuesta;
      //},
      //error: error => {
        //console.log(error.error);
      //}
    //});
  //}

  private cargarCategorias() {
    console.log(this.producto.categorias);
    for (let categoria of this.producto.categorias) {
      let index = this.categorias.findIndex(c => c.name === categoria);
      if (index !== -1) {
        this.categorias[index].checked = true;
      }
    }
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

  ngOnInit(): void {
    //console.log(this.producto.categorias);
    //for (let categoria of this.producto.categorias) {
      //let index = this.categorias.findIndex(c => c.name === categoria);
      //if (index !== -1) {
        //this.categorias[index].checked = true;
      //}
    //}

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
  
  

  onCategoriasChange() {
    const names = this.categorias.filter(categoria => categoria.checked).map(categoria => categoria.name);
    this.producto.categorias = names;
    console.log(this.producto.categorias);
  }
}

interface Categoria {
  label: string;
  name: string;
  checked: boolean;
}


