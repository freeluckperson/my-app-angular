import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hermano',
  templateUrl: './hermano.component.html',
  styleUrl: './hermano.component.css',
})
export class HermanoComponent implements OnInit {
  constructor(private _servicioFamiliar: ServicioFamiliarService) {}
  nombre?: string;
  ngOnInit(): void {
    this._servicioFamiliar.setHermanoPequeño('Pedro');
    this.nombre = this._servicioFamiliar.getHermanoPequeño();
  }
}
