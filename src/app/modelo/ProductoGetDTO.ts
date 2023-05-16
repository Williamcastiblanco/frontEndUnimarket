export class ProductoGetDTO{

    codigo:string ;
    nombre:string ; 
    descripcion:string ; 
    precio:number; 
    unidades:number; 
    imagenes:string[];
    categorias:string[];

    constructor(id: string, nombre: string, descripcion: string, precio: number, unidades: number, imagenes: string[], categorias: string[]) {
        this.codigo = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.unidades = unidades;
        this.imagenes = imagenes;
        this.categorias = categorias;
      }
}