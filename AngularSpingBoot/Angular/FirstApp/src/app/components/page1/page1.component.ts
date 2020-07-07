import { Component, OnInit } from '@angular/core';
import {Page1Service} from '../../services/page1/page1.service';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
somme : number;
  constructor(private service:Page1Service) { }

  ngOnInit(): void {
    this.somme=this.service.somme(4,8);
  }

}
