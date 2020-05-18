import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( private ajustes: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, referencia: any){

    this.ajustes.aplicarTema( tema );
    this.aplicarCheck( referencia );

  }

  aplicarCheck( link: any ) {
    let selectores: any = document.getElementsByClassName('selector');
    for( let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');

  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this.ajustes.ajustes.tema;
    for( let ref of selectores){
      if(ref.getAttribute('data-theme') === tema ){
        ref.classList.add('working');
        break;
      }
    }
  }

}
