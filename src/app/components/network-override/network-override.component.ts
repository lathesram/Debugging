import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-network-override',
  imports: [RouterModule, CommonModule],
  templateUrl: './network-override.component.html',
  styleUrl: './network-override.component.scss',
})
export class NetworkOverrideComponent {
  apiData: any = null;
  isLoading = false;
  requestCount = 0;

  constructor(private http: HttpClient) {}

  fetchUserData() {
    this.isLoading = true;
    this.requestCount++;

    console.log(`🔄 Request #${this.requestCount}: Fetching user data...`);
    console.log('💡 This request can be overridden in DevTools Network tab!');

    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe({
      next: (data: any) => {
        if (data?.name === 'lathes') {
          console.log('Matched name lathes');
          // Logic
        }

        console.log('✅ Received data:', data);
        this.apiData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('❌ Request failed:', error);
        this.apiData = { error: error.message };
        this.isLoading = false;
      },
    });
  }

  fetchPosts() {
    this.isLoading = true;
    this.requestCount++;

    console.log(`🔄 Request #${this.requestCount}: Fetching posts...`);

    this.http
      .get('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .subscribe({
        next: (data) => {
          console.log('✅ Received posts:', data);
          this.apiData = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('❌ Request failed:', error);
          this.apiData = { error: error.message };
          this.isLoading = false;
        },
      });
  }

  clearData() {
    this.apiData = null;
    this.requestCount = 0;
  }
}
