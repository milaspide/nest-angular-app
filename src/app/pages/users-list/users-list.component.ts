import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetListaUtentiResponse } from 'src/app/shared/model/response/getListaUtentiResponse';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public getListaUtenti: GetListaUtentiResponse;

  constructor(private service: GlobalService) {
    this.subscription.add(
      this.service.getListaUtenti().subscribe(
        (response: GetListaUtentiResponse) => {
          this.getListaUtenti = response;
        },
        (error: GetListaUtentiResponse) => {
          console.log('error', error);
        }
      )
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
