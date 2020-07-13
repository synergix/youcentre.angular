import { Component } from '@angular/core';

class Langage {
  id: number;
  nom: string;
}
const LANGAGES: Langage[] = [
  { id: 1, nom: 'angular' },
  { id: 2, nom: 'javascript' },
  { id: 3, nom: 'c#' },
  { id: 4, nom: 'PHP' },
  { id: 5, nom: 'Python' },
  { id: 6, nom: 'java' },
  { id: 7, nom: 'c++' }

]
@Component({
  selector: 'ng-app',
  templateUrl: 'app/template.html',
  styles: ['ul li {list-style-type: none}']
})

export class AppComponent {

  langages=LANGAGES;
}
