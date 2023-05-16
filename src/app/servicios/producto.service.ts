import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/ProductoGetDTO';

@Injectable({
  providedIn: 'root'
})


export class ProductoService {

  productos:ProductoGetDTO[];

  constructor() {
    this.productos=[];

    this.productos.push(new ProductoGetDTO("1", "Televisor LG 4K", "Descripcion 1", 3500000, 2,
    ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
    this.productos.push(new ProductoGetDTO("5", "Tenis Nike", "Descripcion 2", 650000, 4,
    ["https://picsum.photos/450/225"], ["ROPA", "DEPORTE"]));
    this.productos.push(new ProductoGetDTO("8", "Xbox One Series", "Descripcion 1", 3500000, 2,
    ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));

   }

   public listar():ProductoGetDTO[]{
    return this.productos;
   }
}
