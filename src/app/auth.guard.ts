import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          observer.next(true);
        } else {
          this.router.navigate(['/']);
          observer.next(false);
        }
      });
    });
  }
}
