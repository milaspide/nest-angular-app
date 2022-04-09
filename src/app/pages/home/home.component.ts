import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  buttonDisabled = false;
  @Input() buttonText = 'Alert corso angular';

  public stampaTxt(): void {
    alert('ciao questo è il corso angular');
  }

  ngOnInit(): void {}
}
