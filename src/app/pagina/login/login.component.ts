import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { TokenDTO } from 'src/app/modelo/token-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  alerta!:Alerta;
  constructor(public authService:AuthService, public tokenService:TokenService){
    this.authService= this.authService;
    this.tokenService=this.tokenService
  }

  public login(){
    const objeto = this;
    this.authService.login(this.loginUser).subscribe({
    next: data => {
    objeto.tokenService.login(data.respuesta.token);
    },
    error: error => {
    objeto.alerta = new Alerta(error.error.respuesta, "danger");
    }
    });
  
}
}