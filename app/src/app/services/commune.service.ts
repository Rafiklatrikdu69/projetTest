import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  constructor(private http: HttpClient) { }

  sendOk() {
    return this.http.post<any>('../assets/communes-nc_v1.json', { data: 'ok' });
  }
}
