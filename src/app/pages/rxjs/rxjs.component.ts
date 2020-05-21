import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription : Subscription;
  

  constructor() { 
    
    this.subcription = this.regresaObservable()
    // .pipe(
    //   retry(2)
    // )
    .subscribe( 
      valor => {
        console.log( 'Subs ', valor );
      },
      error => {
        console.error( 'Error en el obs ', error );
      },
      () => {
        console.info( 'El observable terminó ');
      }
      
    );

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval(()=>{
        contador += 1;

        const salida = {
          valor: contador
        }

        observer.next( salida );
        // if( contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if( contador === 2) {
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio!')
        // }
      }, 1000);
    }).pipe(
      map( resp => resp.valor ),
      filter(( valor, index ) => valor % 2 === 1 ? true : false )
    );
  }

}
