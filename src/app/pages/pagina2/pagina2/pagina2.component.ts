import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss'],
})
export class Pagina2Component implements OnInit {
  data = [
    { title: 'Titolo1', description: 'abcde' },
    { title: 'Titolo2', description: 'qwerty' },
    { title: 'Titolo3', description: 'poiuy' },
    { title: 'Titolo4', description: 'asdfg' },
  ];
  occorrenze = this.data.length;

  constructor() {}

  ngOnInit(): void {}

  aggiungiOccorrenze(): void {
    this.data.push({ title: 'vuoto', description: 'vuoto' });
    this.occorrenze++;
  }
}
