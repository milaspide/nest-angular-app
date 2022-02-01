import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  public stampaTxt(): void {
    alert('ciao questo è il corso angular');
  }

  ngOnInit(): void {}
}
