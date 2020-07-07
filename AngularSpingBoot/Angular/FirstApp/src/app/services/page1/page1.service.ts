import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Page1Service {

  constructor() { }
  somme(a: number, b: number){
  return a+b;
  }
}
