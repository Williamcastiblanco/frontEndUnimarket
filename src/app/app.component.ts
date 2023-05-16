import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
HttpClientModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unimarket';
  constructor(private router:Router){
  
  }
  public iraBusqueda(valor:string){
    if(valor){
    this.router.navigate(["/busqueda", valor]);
    }
    }
}

