import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserGithub } from '../interface/gitUser';
import { GitRepos } from '../interface/gitRepos';

@Injectable({
  providedIn: 'root'
})
export class Github {
  private apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUser(username: string) {
    return this.http.get<UserGithub>(`${this.apiUrl}/${username}`);
  }

  getAllUsers() {
    return this.http.get<UserGithub[]>(`${this.apiUrl}`);
  }

  getRpos(username: string) {
    return this.http.get<GitRepos[]>(`${this.apiUrl}/${username}/repos`);
  }
}
