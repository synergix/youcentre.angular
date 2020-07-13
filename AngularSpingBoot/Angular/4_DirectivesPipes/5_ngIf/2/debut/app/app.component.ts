import { Component} from '@angular/core';

const LANGAGES : string[] =  [ 
  'angular', 
  'javascript',
  'rails', 
  'python', 
  'swift', 
  'java',
  'c++', 
  'php', 
  'golang'
] 

@Component({
  selector: 'ng-app',
  templateUrl: 'app/template.html'
})

export class AppComponent {

   langages  = LANGAGES;
langagesSelectionnes:string[]=[];
   ajouterAListe(index: number) {
    this.langagesSelectionnes.push(this.langages[index]);
    this.langages.splice(index,1);
   }

   retirerListe(index: number) {
    this.langages.push(this.langagesSelectionnes[index]);
    this.langagesSelectionnes.splice(index,1);
   

   }
    
}
