import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda : string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  @ViewChild("txtProgress", { static: false }) txtProgress: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  cambiarValor( valor: number){
    if( this.progreso > 100 && valor > 0){
      this.progreso = 100;
      return;
    }
    if( this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();

  }

  onChanges( event: number ){
    
    if ( event >= 100){
      this.progreso = 100;
    }else if( event <= 0){
      this.progreso = 0;
    }else{
      this.progreso = event;
    }

    this.txtProgress.nativeElement.value = Number(this.progreso);
    this.cambioValor.emit( this.progreso );
  }

}
