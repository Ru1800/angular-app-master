import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getScholarships(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}Scholarships`);
  }

  applyToScholarship(application: any): Observable<any> {
    return this.http.post(`${this.apiUrl}ScholarshipApplications`, application);
  }

  saveScholarship(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}SavedScholarships`, payload);
  }
}



