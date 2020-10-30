import { Component } from '@angular/core';

import {Biblioteca} from './biblioteca/livro.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca';

  registros: Biblioteca[] = []

 onLivroRegistrado(registro){
   this.registros = [...this.registros, registro]

 }
}
