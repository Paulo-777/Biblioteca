import { Injectable } from '@angular/core';
import { Biblioteca } from './livro.model';
import { Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  
  constructor(private httpClient: HttpClient) { }


  private registros: Biblioteca [] = [];

 

  getRegistros(): void {
    this.httpClient.get<{mensagem : string , registros: Biblioteca[]}>
    ('http://localhost:3000/api/biblioteca').subscribe((dados)=>{
      this.registros = dados.registros;
      this.listaLivrosAtulizada.next([...this.registros]);
    })
    //return [...this.registros];
  }

  private listaLivrosAtulizada = new Subject<Biblioteca[]>();
  
  registrarLivro ( id: string, titulo: string, autor: string, paginas: string): void {
    const livro : Biblioteca = {
      id: id,
      titulo: titulo, 
      autor: autor, 
      paginas: paginas
    };
    this.httpClient.post<{mensagem: String}>
    ('http://localhost:3000/api/biblioteca', livro).subscribe((dados)=>{
      console.log(dados.mensagem)
      this.registros.push(livro);
      this.listaLivrosAtulizada.next([...this.registros]);
    })

  }

  getlistaLivrosAtulizadaObservable() {
    return this.listaLivrosAtulizada.asObservable();
  }

}
