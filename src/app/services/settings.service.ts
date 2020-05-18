import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: './assets/css/colors/default.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }

  guardarAjustes(){
    console.log('Guardando ajustes en localStorage')
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }

  cargarAjustes(){
    if( localStorage.getItem('ajustes') ){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      this.aplicarTema( this.ajustes.tema );
      console.log('Cargando del localStorage')
    }else{
      console.log('Valores por default')
      this.aplicarTema( this.ajustes.tema );
      this.guardarAjustes();
    }
  }

  aplicarTema( tema: string ){
    let url = `./assets/css/colors/${ tema }.css`
    this._document.getElementById('tema').setAttribute('href', url );
  
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
