import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina5',
  templateUrl: './pagina5.component.html',
  styleUrls: ['./pagina5.component.scss']
})
export class Pagina5Component implements OnInit {

  currentClasses: Record<string, boolean> = {};
  class1 =  false;
  class2 = false;
  class3 = false;

  constructor() { }

  ngOnInit(): void {
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      class1: this.class1,
      class2: this.class2,
      class3: this.class3
    };
  }

  buttonPush(value){
    if(value==1) {
      this.class1=!this.class1;
    } else if(value==2) {
      this.class2=!this.class2;
    } else if(value==3) {
      this.class3=!this.class3;
    }
    this.setCurrentClasses();
  }
}
