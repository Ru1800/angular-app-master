import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  // HBCU domains
  hbcuDomains: string[] = [
    '@bulldogs.aamu.edu',
    '@students.howard.edu',
    '@my.ncat.edu',
    '@students.famu.edu',
    '@students.clarkatlanta.edu',
    '@students.spelman.edu',
    '@students.morehouse.edu',
    '@students.tsualumni.org'
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-z]+\.[a-z]+$/i)]],
      domain: [this.hbcuDomains[0], Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.isLoading = true;

    const { username, domain, password } = this.loginForm.value;
    const email = `${username}${domain}`.toLowerCase(); // 👈 Build the email from input + dropdown

    this.authService.login(email, password)
      .then(() => {
        console.log('✅ Login success');
        localStorage.setItem('isLoggedIn', 'true');
        this.authService.loginSuccess();
        this.router.navigateByUrl(this.returnUrl);
      })
      .catch(err => {
        console.error('❌ Login failed:', err);
        this.errorMessage = 'Invalid email or password';
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
