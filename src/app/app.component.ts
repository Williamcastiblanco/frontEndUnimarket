import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unimarket';
  private router:Router;

  constructor( router: Router){
    this.router=router;
  }

  public iraBusqueda(valor:string){
    if(valor){
      this.router.navigate(["/busqueda",valor]);
    }
  }

}
