import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Biblioteca } from '../livro.model';
import { BibliotecaService } from '../biblioteca.service';

@Component({
  selector: 'app-biblioteca-cadastrar',
  templateUrl: './biblioteca-cadastrar.component.html',
  styleUrls: ['./biblioteca-cadastrar.component.css']
})
export class BibliotecaCadastrarComponent {

  constructor(public bibliotecaService: BibliotecaService){}

  //@Output() LivroAdd = new EventEmitter <Biblioteca>();

  //id: string;
  //titulo: string;
  //autor: string;
  //paginas: string;

  onRegistrar(form:NgForm){
    if (form.invalid)
      return;
      this.bibliotecaService.registrarLivro(
        form.value.id,
        form.value.titulo,
        form.value.autor,
        form.value.paginas
      );
      form.resetForm();
    }
    
    //const registro: Biblioteca = {
      //id: form.value.id,
      //titulo: form.value.titulo, 
      //autor: form.value.autor, 
      //paginas: form.value.paginas,
    //}

    //this.LivroAdd.emit(registro);

    //this.id = '';
    //this.titulo = '';
    //this.autor = '';
    //this.paginas = '';

  }
   

