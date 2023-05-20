import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private apiUrl = 'https://api.github.com/users/iamshazaam/events';

  constructor(private http: HttpClient) {}

  getGithubEvents(): Observable<any> {
    //
    return this.http.get<any>(this.apiUrl);
  }
}
