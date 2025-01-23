import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  id: number;
  description: string;
  title: string;
  url: string;
  thumbnail: string;
  uploadedAt: string
  views: number
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:3000/videos' : 'https://tubevideos.netlify.app/assets/db.json';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }
}
