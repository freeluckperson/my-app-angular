import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  title: string = 'Soy el componente Padre';
  messageFromFather: string = 'message from father';
}
