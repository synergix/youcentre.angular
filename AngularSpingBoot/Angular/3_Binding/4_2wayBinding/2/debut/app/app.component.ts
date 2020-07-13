import { Component } from '@angular/core';


@Component({
    selector: 'ng-app',
    templateUrl: 'app/template.html',
    styles:['ul li {cursor: pointer}','.fait{ text-decoration: line-through; color:#cc}']
})
export class AppComponent { 
    taches:any[]=[
        {texte:'Faire', fait:false},
        {texte:'Payer',fait:false},
        {texte:'Réserver',fait:false}
    ];
    ajouterAListe(nouvelleTache:string){
        this.taches.push({texte:nouvelleTache,fait:false});
    }
    barreListe(index:string){
        this.taches[index].fait=true;

    }
}
