import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';

/** Imports do Angular Material */
import{ MatInputModule } from '@angular/material/input';
import{ MatCardModule } from '@angular/material/card';
import{ MatButtonModule } from '@angular/material/button';
import{ MatToolbarModule } from '@angular/material/toolbar';
import{ MatExpansionModule } from '@angular/material/expansion';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BibliotecaCadastrarComponent } from './biblioteca/biblioteca-cadastrar/biblioteca-cadastrar.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LivrosListaComponent } from './biblioteca/livros-lista/livros-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    BibliotecaCadastrarComponent,
    LivrosListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
