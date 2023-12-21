import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  @Output() msjDeHijo = new EventEmitter<string>();
  
  mensaje: string = '';

  enviarMsj() {
    this.msjDeHijo.emit(this.mensaje);
  }
}
