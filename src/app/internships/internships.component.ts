import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InternshipService } from '../internship.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-internships',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {
  internships: any[] = [];
  filteredInternships: any[] = [];
  searchTerm: string = '';
  isLoggedIn: boolean = false;
  userId: number | null = null;

  constructor(
    private internshipService: InternshipService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.internshipService.getInternships().subscribe(data => {
      this.internships = data;
      this.filteredInternships = data;
    });

    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      this.userId = this.authService.getUserId();
    });
  }

  onSearch(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredInternships = this.internships.filter(i =>
      i.Title.toLowerCase().includes(term) ||
      i.Company.toLowerCase().includes(term)
    );
  }
}
