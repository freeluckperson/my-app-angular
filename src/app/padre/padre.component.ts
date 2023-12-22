import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent implements OnInit {
  nombre?: string;
  
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juanchon');
    this.nombre = this._servicioFamiliar.getHermanoGrande();
  }
  contador: number = 0;
  incremento() {
    this.contador++;
  }
  decremento() {
    this.contador--;
  }
}
