import { Component } from '@angular/core';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  
usuario:UsuarioDTO;

constructor(){
 this.usuario = new UsuarioDTO; 
}

/**
 * Más adelante haremos la integración con el backend por medio del consumo de la API REST.
 */
public registrar(){
  console.log(this.usuario);
  }

  /**
   * Método que la contraseña se escriba igual en dos campos
   * @returns 
   */
  public sonIguales():boolean{
    return this.usuario.password == this.usuario.confirmaPassword;
    }

}







