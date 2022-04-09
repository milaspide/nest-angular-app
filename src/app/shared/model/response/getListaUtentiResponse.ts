import { HttpErrorResponse } from '@angular/common/http';
import { UtenteObj } from '../utenteObj';

export interface GetListaUtentiResponse extends HttpErrorResponse {
  listaUtenti?: UtenteObj[];
}
