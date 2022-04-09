import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss'],
})
export class Pagina1Component implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 40;

  showProgressSpinner = true;
  buttonText = 'Hide Progress Spinner';

  constructor() {}

  ngOnInit(): void {}

  hideProgressSpinner(): void {
    if (this.showProgressSpinner) {
      this.buttonText = 'Show Progress Spinner';
    } else {
      this.buttonText = 'Hide Progress Spinner';
    }
    this.showProgressSpinner = !this.showProgressSpinner;
  }
}
