import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any = {}

  constructor( private activatedRoute:ActivatedRoute,
               private _heroesService:HeroesService
    ) {
  
    activatedRoute.params.subscribe( parameters => { 

      this.heroe = _heroesService.getHeroe(parameters['id']) 
      
    });

  }

}
