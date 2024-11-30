import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeService, Item } from '../../home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: Item[] = [];
  searchTerm: string = '';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => {
        console.error('Erro ao buscar itens:', err);
      }
    });
  }

  get filteredItems(): Item[] {
    return this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
