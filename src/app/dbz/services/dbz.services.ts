import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

    private _personaje: Personaje[]=[
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }
      ];

      get personaje(): Personaje[]{
        return [...this._personaje];
      }

    constructor(){
        console.log('servicio inicializdo');
    }

    agregarPersonaje(personaje: Personaje){
        this._personaje.push(personaje);
    }
}
