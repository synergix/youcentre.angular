import { Component } from '@angular/core';

@Component({
    selector: 'ng-app',
    templateUrl: 'app/template.html'
})
export class AppComponent { 
	
    titre = "Vous avez cliqué sur le bouton";
    text :string ="Chargement Text 2";
    date:string="Afficher la date";
    nombre:number=0;
    images: string[]=['app/images/image1.jpg','app/images/image2.jpg','app/images/image3.jpg','app/images/image4.jpg','app/images/image5.jpg'];
    image:string =this.images[0];
    width:string="555";
    height:string="300";
    index:number=0;
    onClickAlert(){alert(this.titre)}
    onClickText(){this.text="Chargement Text 1"}
    onClickDate(){this.date=(new Date).toString()}
    onClickInc(){this.nombre++}
    onClickIncImage(){
        if(this.index==this.images.length-1){
            this.index=0;
            this.image=this.images[this.index];
        }else{
            this.index++;
            this.image=this.images[this.index];
        }
        
        
        

}
}
