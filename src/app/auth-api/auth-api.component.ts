import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-api.component.html',
  styleUrl: './auth-api.component.css'
})
export class AuthApiComponent implements OnInit {
  posts: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loading = true;
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erro ao buscar dados da API.';
        this.loading = false;
      }
    });
  }
}
