import { Component } from '@angular/core';

@Component({
    selector: 'ng-app',
    template: `<h1>{{titre}}</h1>
    <p>
    <button (click)="onClick()">Cliquer sur bouton</button>
    </p>
    `
})
export class AppComponent {
    titre="Quelle date on est ?";
    date : Date=new Date();
 alert:string="tu as cliqué sur le bouton";
    onClick(){
alert(this.alert +" voici la date : "+this.date);
    }
}
 