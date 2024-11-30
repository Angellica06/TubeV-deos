import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$!: Observable<any>;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.user$ = this.auth.user$;
  }

  login() {
    this.auth.loginWithRedirect({
      appState: { target: '/home' },
    });
  }
}
