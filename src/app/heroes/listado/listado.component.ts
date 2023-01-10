import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] =['spiderman', 'ironman','hulk', 'thor', 'capitan america'];
  heroeBo: string ='';

  borrarHeroe(){
    console.log("borrando....");
    const borrado= this.heroes.shift() || '';
    this.heroeBo = borrado;
  }

}
