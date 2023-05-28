import { ListItem } from "ng-multiselect-dropdown/multiselect.model";
import { ImagenService } from "../servicios/imagen.service";

export class ProductoDTO {
nombre: string = "";
descripcion: string = "";
precio: number = 0;
unidades: number = 0;
codigoVendedor:number=0;
imagenes:String[]=[];
categorias: string[] = [];
}
