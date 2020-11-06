import { Component, OnDestroy, OnInit } from '@angular/core';
import { BibliotecaService } from '../biblioteca.service';
import { Biblioteca } from '../livro.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-livros-lista',
  templateUrl: './livros-lista.component.html',
  styleUrls: ['./livros-lista.component.css']
})
export class LivrosListaComponent implements OnInit, OnDestroy  {


 lista: Biblioteca[] = []
 private listaSubscription: Subscription;

 constructor(public bibliotecaService: BibliotecaService) {}
 
 ngOnInit(): void{
  this.bibliotecaService.getRegistros();
  this.listaSubscription = this.bibliotecaService.getlistaLivrosAtulizadaObservable()
  .subscribe(
    (lista: Biblioteca[]) => {
      this.lista = lista;
    }
    );
 }

 ngOnDestroy(): void{
    this.listaSubscription
 }

}


