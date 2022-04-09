import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleComponent } from '../dialog/dialog-example.component';
import { Observable } from 'rxjs';
import { GlobalService } from '../../service/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  animal: string;
  name: string;
  @Output() showButtonEvent = new EventEmitter<string>();
  buttonText1 = 'hai premuto il bottone 1';
  buttonText2 = 'hai premuto il bottone 2';

  constructor(public dialog: MatDialog, private service: GlobalService) {}

  ngOnInit(): void {}

  getListaUtenti(): void {
    this.service.getListaUtenti().subscribe();
  }

  showLabel(value: string): void {
    this.showButtonEvent.emit(value);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
