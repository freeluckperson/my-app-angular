import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  msjRecibido: string = '';

  recibirMsj($event: string) {
    this.msjRecibido = $event;
  }

  //Counter
  count: number = 0;
  increse() {
    this.count++;
  }
  decrese() {
    this.count--;
  }
}
