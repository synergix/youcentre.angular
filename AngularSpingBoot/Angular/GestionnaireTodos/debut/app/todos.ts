import { Todo } from './todo';

export const TODOS: Todo[] = [
    {
        texte: 'Aller chez le dentiste',
        desc: 'Détartage et radio',
        date: new Date(),
        estFait: false,
        priority: 'Faible'
    },
    {
        texte: 'Appeler Pierre',
        desc: 'Invitation anniversaire',
        date: new Date(),
        estFait: false,
        priority: 'Moyenne'
    }

];