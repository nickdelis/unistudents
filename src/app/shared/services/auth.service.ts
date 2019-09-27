import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {EnvService} from './env.service';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private env: EnvService
  ) { }

  login(username, password) {
    return this.http.post(this.env.API_URL + '/api/student', {
      username: username,
      password: password
    });
  }

  logout() {
    this.storageService.removeStudent();
    this.isLoggedIn = false;
  }
}
