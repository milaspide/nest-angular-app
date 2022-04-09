import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.scss'],
})
export class Pagina3Component implements OnInit {
  buttonValue = '';

  constructor() {}

  ngOnInit(): void {}

  buttonPush(n): void {
    this.buttonValue = 'button' + n;
  }
}
