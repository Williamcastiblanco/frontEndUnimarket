import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/ProductoGetDTO';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos:ProductoGetDTO[];
  constructor(){
  this.productos = [];
  this.productos.push(new ProductoGetDTO(1, "Televisor LG 4K", "Descripcion 1", 3500000, 2,
  ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
  this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Descripcion 2", 650000, 4,
  ["https://picsum.photos/450/225"], ["ROPA", "DEPORTE"]));
  this.productos.push(new ProductoGetDTO(3, "Tablet", "Descripcion 3", 1500000, 8,
  ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
  this.productos.push(new ProductoGetDTO(4, "Reloj BlackEdition", "Descripcion 4", 350000, 4,
  ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
  this.productos.push(new ProductoGetDTO(5, "Switch", "Descripcion 5", 1100000, 3,
  ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
  this.productos.push(new ProductoGetDTO(6, "Impresora", "Descripcion 6", 850000, 9,
  ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
  this.productos.push(new ProductoGetDTO(7, "Hwawei 8Pro", "Descripcion 7", 3500000, 7,
  ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
  this.productos.push(new ProductoGetDTO(8, "PC GAMER", "Descripcion 8", 5000000, 1,
  ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
  //CREE OTROS PRODUCTOS (AL MENOS 6 MÁS)
  }
  public listar():ProductoGetDTO[]{
  return this.productos;
  }
  public obtener(id:number):ProductoGetDTO | undefined{
    
    return this.productos.find(i => i.codigo == id);
    }

  }
