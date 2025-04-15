import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) {
    this.checkLogin();
  }

  login(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (email && password) {
        // Fake login success
        localStorage.setItem('isLoggedIn', 'true');
        this.loggedIn.next(true); // 🔥 THIS IS WHAT GUARD USES
        resolve();
      } else {
        reject('Invalid login');
      }
    });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.loggedIn.next(isLoggedIn);
  }
  loginSuccess() {
    this.loggedIn.next(false); // set BehaviorSubject to false
    localStorage.removeItem('isLoggedIn');
  }
}
