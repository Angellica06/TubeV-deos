import { Routes } from '@angular/router';
import { WelcomeComponent } from './componentes/welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
];
