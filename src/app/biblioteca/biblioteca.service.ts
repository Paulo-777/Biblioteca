import { Injectable } from '@angular/core';
import { Biblioteca } from './livro.model';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  
  constructor() { }


  private registros: Biblioteca [] = [];

  private listaLivrosAtulizada = new Subject<Biblioteca[]>();

  getRegistros(): Biblioteca[] {
    return [...this.registros];
  }
  
  registrarLivro ( id: string, titulo: string, autor: string, paginas: string): void {
    const livro : Biblioteca = {
      id: id,
      titulo: titulo, 
      autor: autor, 
      paginas: paginas
    };
    this.registros.push(livro)

    this.listaLivrosAtulizada.next([...this.registros]);
  }

  getlistaLivrosAtulizadaObservable() {
    return this.listaLivrosAtulizada.asObservable();
  }

}
