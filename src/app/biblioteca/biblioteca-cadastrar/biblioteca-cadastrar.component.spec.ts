import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaCadastrarComponent } from './biblioteca-cadastrar.component';

describe('BibliotecaCadastrarComponent', () => {
  let component: BibliotecaCadastrarComponent;
  let fixture: ComponentFixture<BibliotecaCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaCadastrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecaCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
