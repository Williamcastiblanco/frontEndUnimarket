import { Component } from '@angular/core';


@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent {
  selectedQuindio: string  = "Quindio ";
  selectedOptions: string[] = ["Armenia"];
  direccion: string = 'Universidad del Quindio';
  seleccionMostrada: boolean = false;

 // constructor(selectedQuindio: string,selectedOptions: string[],  direccion: string ){
//this.selectedQuindio=selectedQuindio;
//this.selectedOptions=selectedOptions;
//this.direccion=direccion;

  
  
  mostrarSeleccion() {
    this.seleccionMostrada = true;
  }

}




