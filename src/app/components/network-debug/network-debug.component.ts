import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-network-debug',
  imports: [RouterModule, CommonModule],
  templateUrl: './network-debug.component.html',
  styleUrl: './network-debug.component.scss',
})
export class NetworkDebugComponent {
  apiResults: any[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  fetchPosts() {
    this.isLoading = true;
    this.error = null;
    this.apiResults = [];

    console.log('🌐 Making API request to JSONPlaceholder...');
    console.log('💡 Check Network tab in DevTools to see the request!');

    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .subscribe({
        next: (data) => {
          console.log('✅ API Response received:', data);
          this.apiResults = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('❌ API Error:', error);
          this.error = `Error: ${error.status} - ${error.statusText}`;
          this.isLoading = false;
        },
      });
  }

  fetchSinglePost() {
    this.isLoading = true;
    this.error = null;
    this.apiResults = [];

    console.log('🌐 Fetching single post...');

    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe({
        next: (data) => {
          console.log('✅ Single post received:', data);
          this.apiResults = [data];
          this.isLoading = false;

         
        },
        error: (error) => {
          console.error('❌ API Error:', error);
          this.error = `Error: ${error.status} - ${error.statusText}`;
          this.isLoading = false;
        },
      });
  }

  createPost() {
    this.isLoading = true;
    this.error = null;

    const newPost = {
      title: 'Debug Playground Post',
      body: 'This is a test post created from the debug playground',
      userId: 1,
    };

    console.log('🌐 Creating new post via POST request:', newPost);

    this.http
      .post<any>('https://jsonplaceholder.typicode.com/posts', newPost)
      .subscribe({
        next: (data) => {
          console.log('✅ Post created successfully:', data);
          this.apiResults = [data];
          this.isLoading = false;
        },
        error: (error) => {
          console.error('❌ Create post error:', error);
          this.error = `Error: ${error.status} - ${error.statusText}`;
          this.isLoading = false;
        },
      });
  }

  fetchWithError() {
    this.isLoading = true;
    this.error = null;
    this.apiResults = [];

    console.log('🌐 Deliberately triggering a 404 error...');
    console.log('💡 Watch the Network tab for the failing request!');

    this.http
      .get<any>('https://jsonplaceholder.typicode.com/posts/999999')
      .subscribe({
        next: (data) => {
          console.log('✅ Unexpected success:', data);
          this.apiResults = [data];
          this.isLoading = false;
        },
        error: (error) => {
          console.error('❌ Expected 404 error:', error);
          this.error = `Expected Error: ${error.status} - ${error.statusText}`;
          this.isLoading = false;
        },
      });
  }

  clearResults() {
    this.apiResults = [];
    this.error = null;
  }
}
