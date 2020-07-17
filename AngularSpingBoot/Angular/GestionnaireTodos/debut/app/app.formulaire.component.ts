import { Component } from "@angular/core";
import { TODOS } from './todos';

@Component({
    selector: 'formulaire-todo',
    templateUrl: 'app/app.formulaire.component.html'
})

export class AppFormulaireComponent {
    todos = TODOS;
    priorities: string[] = ['Faible', 'Moyenne', 'Haute'];
    priority = 'Faible';
    todoDate: string;
    todoDesc: string;
    nouveauTodo: string;
    ajouterNouveauTodo(texte: string, desc: string, date: Date, priority: string) {
        this.todos.push({ texte: texte, desc: desc, date: date, estFait: false, priority: priority })
       this.reinitialiserTodo();
    }
    reinitialiserTodo(){
        this.priority = 'Faible';
        this.todoDate = null;
        this.todoDesc = '';
        this.nouveauTodo = '';
    }
}