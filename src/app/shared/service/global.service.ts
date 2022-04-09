import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetListaUtentiResponse } from '../model/response/getListaUtentiResponse';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private client: HttpClient) {}

  public getListaUtenti(id?: string): Observable<GetListaUtentiResponse> {
    return this.client.get<GetListaUtentiResponse>(
      environment.baseUrl + 'getListaUtenti'
    );
  }
}
