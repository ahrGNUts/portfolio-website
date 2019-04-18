import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private serverUrl = 'http://localhost:3000/send';

  constructor(private http: HttpClient) {}

  sendMessageData(data) {
    return this.http.post(
      this.serverUrl,
      JSON.stringify(data),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text'});
  }
}
