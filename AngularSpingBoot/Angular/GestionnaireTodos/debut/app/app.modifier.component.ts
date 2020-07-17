import { Component, Input} from "@angular/core";
import { Todo } from './todo';

@Component({
selector:'modifier-app',
templateUrl:'app/app.modifier.component.html',
})




export class AppModifierComponent{
    @Input() todo :Todo;
    edit: boolean = false;
    texteBouton: string="Modifier";
    priorities: string[] = ['Faible', 'Moyenne', 'Haute'];
    
    modifierTodo(bool: boolean) {
        this.edit = !bool;
        this.texteBouton = this.edit ? "Sauvegarder" : "Modifier"
    }
}