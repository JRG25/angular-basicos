import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personaje: Personaje[]=[];

  get personaje(){
    return this.dbzService.personaje;
  }


  constructor(private dbzService: DbzService){}

}
