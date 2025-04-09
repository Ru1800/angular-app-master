import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  featured = [
    {
      title: 'HBCU Scholarship Program',
      description: 'Apply for our exclusive scholarship program designed for HBCU students.',
      image: 'assets/scholarship.jpg',
      link: '/scholarships'
    },
    {
      title: 'Summer Internship Opportunities',
      description: 'Discover summer internships at top companies across the country.',
      image: 'assets/internship.jpg',
      link: '/internships'
    },
    {
      title: 'Alumni Success Stories',
      description: 'Read inspiring stories from HBCU graduates.',
      image: 'assets/success.jpg',
      link: '/blog'
    }
  ];
}