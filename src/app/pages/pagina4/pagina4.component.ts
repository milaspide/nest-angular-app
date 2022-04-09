import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.scss']
})
export class Pagina4Component implements OnInit {

  styleValue = "top";

  styleObject;

  

  constructor() { }

  ngOnInit(): void {
    this.refreshStyleObject();
  }

  refreshStyleObject()
  {
    this.styleObject =  {
    // borderBottom: '3px solid lightgreen'
    'border-bottom': this.styleValue === 'bottom' ? '13px solid lightgreen' : '',
    'border-top': this.styleValue  === 'top' ? '13px solid lightgreen' : '',
    'border-right': this.styleValue  === 'right' ? '13px solid lightgreen' : '',
    'border-left': this.styleValue  === 'left' ? '13px solid lightgreen' : '',
    }
  };

  buttonPush(value){
    this.styleValue=value;
    this.refreshStyleObject();
  }

}
