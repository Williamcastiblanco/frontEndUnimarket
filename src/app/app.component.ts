
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenService } from './servicios/token.service';
import { SesionService } from './servicios/sesion.service';
HttpClientModule

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Unimarket';
  isLogged = false;
  email: string = "";
  
  constructor(private tokenService: TokenService, private sesionService: SesionService,private router:Router) { }
  ngOnInit(): void {
    const objeto = this;
    this.sesionService.currentMessage.subscribe({
      next: data => {
        objeto.actualizarSesion(data);
      }
    });
    this.actualizarSesion(this.tokenService.isLogged());
  }
  public iraBusqueda(valor:string){
    if(valor){
    
    this.router.navigate(["/busqueda", valor]);
    }
    }
  private actualizarSesion(estado: boolean) {
    this.isLogged = estado;
    if (estado) {
      this.email = this.tokenService.getEmail();
    } else {

      this.email = "";
    }
  }
  public logout() {
    this.tokenService.logout();
  }
}

