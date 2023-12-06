import { Component } from '@angular/core';
import { Person } from './interfaces/person.typy';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public author: Person = { nombre: 'Pablo', apellido: 'Ralil'};

}
