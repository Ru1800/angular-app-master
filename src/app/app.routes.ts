import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'login', 
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  { 
    path: 'signup', 
    loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent) 
  },
  { 
    path: 'scholarships', 
    loadComponent: () => import('./scholarships/scholarships.component').then(m => m.ScholarshipsComponent) 
  },
  { 
    path: 'internships', 
    loadComponent: () => import('./internships/internships.component').then(m => m.InternshipsComponent) 
  },
  { 
    path: 'blog', 
    loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];