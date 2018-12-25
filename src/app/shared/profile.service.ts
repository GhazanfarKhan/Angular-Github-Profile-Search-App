import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {
  }
  getUserProfile(username: string): Observable<any> {
    const url = `${environment.apiUrl}/users/${username}?client_id=${environment.clientId}&client_secret=${environment.clientSecret}`;
    return this.http.get(url);
  }
  getUserRepos(username: string): Observable<any>{
    const url = `${environment.apiUrl}/users/${username}/repos?client_id=${environment.clientId}&client_secret=${environment.clientSecret}`;
    return this.http.get(url);
  }
}
