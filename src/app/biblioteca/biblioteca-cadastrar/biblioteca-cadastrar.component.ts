import { Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-biblioteca-cadastrar',
  templateUrl: './biblioteca-cadastrar.component.html',
  styleUrls: ['./biblioteca-cadastrar.component.css']
})
export class BibliotecaCadastrarComponent {

  @Output() LivroAdd = new EventEmitter();

  id: string;
  titulo: string;
  autor: string;
  paginas: string;

  onRegistrar(){
    const registro = {
      id: this.id,
      titulo: this.titulo, 
      autor: this.autor, 
      paginas: this.paginas,
    }

    this.LivroAdd.emit(registro);

  }
   
}
