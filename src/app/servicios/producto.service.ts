import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ProductoGetDTO } from '../modelo/ProductoGetDTO';
import { ProductoDTO } from '../modelo/producto-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {//Preguntar como Dado que el código del usuario es importante para crear el producto en la base de
 // datos, entonces asígnele un código de un usuario que exista en la base de datos antes de llamar la
  //función crear() del productoService. Por ahora lo dejamos quemado, luego deberá asignarse
  //el código del usuario dado el token de sesión.
  private authURL = "http://localhost:8080/api/productos";
  productos:ProductoGetDTO[] = [];
  
  constructor(private http:HttpClient) {
    this.productos = [];}


  public crear(producto:ProductoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/crear-producto`, producto);
  }

  public listar() :Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.authURL}/listar-producto`);
  }

    public obtener(id:number):ProductoGetDTO | undefined{
      
      return this.productos.find(i => i.codigo == id);
    }
 // 
  // this.productos.push(new ProductoGetDTO(1, "Televisor LG 4K", "Descripcion 1", 3500000, 2,
   //["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
   //this.productos.push(new ProductoGetDTO(2, "Tenis Nike", "Descripcion 2", 650000, 4,
   //["https://picsum.photos/450/225"], ["ROPA", "DEPORTE"]));
   //this.productos.push(new ProductoGetDTO(3, "Tablet", "Descripcion 3", 1500000, 8,
   //["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
   //this.productos.push(new ProductoGetDTO(4, "Reloj BlackEdition", "Descripcion 4", 350000, 4,
   //["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
   //this.productos.push(new ProductoGetDTO(5, "Switch", "Descripcion 5", 1100000, 3,
   //["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
   //this.productos.push(new ProductoGetDTO(6, "Impresora", "Descripcion 6", 850000, 9,
   //["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
   //this.productos.push(new ProductoGetDTO(7, "Hwawei 8Pro", "Descripcion 7", 3500000, 7,
   //["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
   //this.productos.push(new ProductoGetDTO(8, "PC GAMER", "Descripcion 8", 5000000, 1,
   //["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA"]));
  //CREE OTROS PRODUCTOS (AL MENOS 6 MÁS)


  }
