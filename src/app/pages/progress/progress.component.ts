import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;


  constructor() {

   }

  ngOnInit() {
    
  }

  // actualizar( valor: number ){
  //   console.log("Event", valor);
  //   this.progreso1 = valor;
  // }

}
