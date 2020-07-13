import { Component } from '@angular/core';

@Component({
    selector: 'ng-app',
    templateUrl: 'app/template.html'
})

export class AppComponent {
    texteBouton: string = "cacher";
    visible: boolean = true;
    cacherTexte() {

        this.visible = this.visible==true ? false : true;
    }
}
