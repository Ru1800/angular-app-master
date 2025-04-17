import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScholarshipService } from '../scholarship.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-scholarships',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.css']
})
export class ScholarshipsComponent implements OnInit {
  scholarships: any[] = [];
  filteredScholarships: any[] = [];
  searchTerm: string = '';
  isLoggedIn: boolean = false;
  userId: number | null = null;

  constructor(
    private scholarshipService: ScholarshipService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.scholarshipService.getScholarships().subscribe(data => {
      this.scholarships = data;
      this.filteredScholarships = data;
    });

    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      this.userId = this.authService.getUserId();
    });
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredScholarships = this.scholarships.filter(s =>
      s.Name.toLowerCase().includes(term)
    );
  }

  applyToScholarship(scholarship: any): void {
    console.log('Button clicked', scholarship);
    console.log('User ID:', this.userId);
    
    if (!this.userId) {
      alert('You must be logged in to apply.');
      return;
    }

    const applicationPayload = {
      ApplicationID: 0, // optional placeholder if backend uses identity
      UserID: this.userId,
      ScholarshipID: scholarship.ScholarshipID,
      ApplicationDate: new Date().toISOString(),
      Status: 'Pending'
    };
    console.log('Payload being sent:', applicationPayload);

    this.scholarshipService.applyToScholarship(applicationPayload).subscribe({
      next: () => alert(`Successfully applied to: ${scholarship.Name}`),
      error: (err) => {
        console.error('Application failed:', err);
        alert('Something went wrong while applying.');
      }
    });
  }

  saveScholarship(scholarship: any): void {
    if (!this.userId) {
      alert('You must be logged in to save scholarships.');
      return;
    }

    const savePayload = {
      ScholarshipID: scholarship.ScholarshipID,
      UserID: this.userId,
      SavedAt: new Date().toISOString()
    };

    this.scholarshipService.saveScholarship(savePayload).subscribe({
      next: () => alert(`Saved: ${scholarship.Name}`),
      error: (err) => {
        console.error('Save failed:', err);
        alert('Something went wrong while saving.');
      }
    });
  }
}






