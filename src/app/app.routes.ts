import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { InternshipsComponent } from './internships/internships.component';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent as AboutComponent } from './community/community.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // 👈 redirect to home instead of login
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // 🔓 Publicly viewable routes (no AuthGuard)
  { path: 'home', component: HomeComponent },
  { path: 'scholarships', component: ScholarshipsComponent },
  { path: 'internships', component: InternshipsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },

  { path: '**', redirectTo: 'home' } // 👈 wildcard to home
];

  
