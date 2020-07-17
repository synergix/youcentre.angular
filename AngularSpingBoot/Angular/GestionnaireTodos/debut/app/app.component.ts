import { Component, style, Directive } from '@angular/core';
import { AppFormulaireComponent } from './app.formulaire.component'
import { AppModifierComponent } from './app.modifier.component'
import { TODOS } from './todos';
import { Todo } from './todo';
@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [AppFormulaireComponent,AppModifierComponent]

})

export class AppComponent {

    todos = TODOS;
    todoSelectionne: Todo;
   
    setClasses(todo: Todo) {
        let classes = {
            faible: todo.priority == 'Faible',
            moyenne: todo.priority == 'Moyenne',
            haute: todo.priority == 'Haute'
        }
        return classes;
    }
    
    onSelect(todo: Todo) {
        this.todoSelectionne = todo
    }
    marquerFait(index:number){
        this.todos[index].estFait= this.todos[index].estFait?false:true;

    }
    supprimerTodo(index:number){
        this.todos.splice(index,1);
    }
}