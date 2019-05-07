import * as JWT from 'jwt-decode';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;

  constructor(private http: HttpClient) {}

  isAuthentication(): boolean {
    return !!this.token;
  }

  authenticateUser(username: string, password: string): Observable<string> {
    return this.http.post<string>('api/accessTokens', {username, password}, { responseType: 'text' as 'json'} )
      .pipe(
        map(jwtToken => {
        this.token = jwtToken;
        return jwtToken;
      }));
  }
  
  getUser(): User {
    return <User>JWT(this.token);
  }

  logOut(): void {
    this.token = null;
  }

}
