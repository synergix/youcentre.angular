import { Component } from '@angular/core';

@Component({
    selector: 'ng-app',
    template: `
    <h1>{{titre}}</h1>
    <h2>J'apprend Angular {{ 1 + 1 }} </h2>

    <p> C'est un paragraphe</p>
    
    `

})

export class AppComponent {

    titre = "Mon Premier Project Angular 2"
}
