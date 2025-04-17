import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
    this.checkLogin();
  }

  /**
   * Attempts to log the user in and stores user info in localStorage
   */
  login(email: string, password: string): Promise<void> {
    return this.http.post<any>(`${this.apiUrl}Users/login`, {
      email,
      passwordHash: password
    }).toPromise().then((user) => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(user));
      this.loggedIn.next(true);
    }).catch(() => {
      return Promise.reject('Invalid login');
    });
  }

  /**
   * Logs the user out and clears all relevant storage/state
   */
  logout(): void {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  /**
   * Checks login state on app load
   */
  checkLogin(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.loggedIn.next(isLoggedIn);
  }

  /**
   * If login was successful and you want to force logout/reset manually
   */
  loginSuccess(): void {
    this.loggedIn.next(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  /**
   * Returns the full user object
   */
  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  /**
   * Returns only the UserID of the logged in user
   */
  getUserId(): number | null {
    const user = this.getUser();
    return user ? user.UserID : null;
  }

  /**
   * Returns the user's full name (optional)
   */
  getUserName(): string | null {
    const user = this.getUser();
    return user ? `${user.FirstName || ''} ${user.LastName || ''}`.trim() : null;
  }
}

