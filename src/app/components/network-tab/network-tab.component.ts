import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-network-tab',
  imports: [RouterModule, CommonModule],
  templateUrl: './network-tab.component.html',
  styleUrl: './network-tab.component.scss'
})
export class NetworkTabComponent {
  responses: any[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  makeSuccessRequest() {
    this.isLoading = true;
    console.log('🌐 Making successful request...');
    
    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe({
      next: (response) => {
        console.log('✅ Success response:', response);
        this.responses.unshift({
          type: 'success',
          status: 200,
          message: 'GET /users/1 - Success',
          data: response,
          timestamp: new Date().toLocaleTimeString()
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.handleError(error, 'GET /users/1');
        this.isLoading = false;
      }
    });
  }

  make404Request() {
    this.isLoading = true;
    console.log('🌐 Making 404 request...');
    
    this.http.get('https://jsonplaceholder.typicode.com/users/999').subscribe({
      next: (response) => {
        console.log('Unexpected success:', response);
        this.isLoading = false;
      },
      error: (error) => {
        this.handleError(error, 'GET /users/999 (404)');
        this.isLoading = false;
      }
    });
  }

  makeSlowRequest() {
    this.isLoading = true;
    console.log('🌐 Making slow request...');
    
    // Using a service that adds delay
    this.http.get('https://httpbin.org/delay/3').subscribe({
      next: (response) => {
        console.log('✅ Slow request completed:', response);
        this.responses.unshift({
          type: 'success',
          status: 200,
          message: 'GET /delay/3 - Slow request completed',
          data: 'Request took 3 seconds',
          timestamp: new Date().toLocaleTimeString()
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.handleError(error, 'GET /delay/3 (slow)');
        this.isLoading = false;
      }
    });
  }

  makeInvalidUrlRequest() {
    this.isLoading = true;
    console.log('🌐 Making request to invalid URL...');
    
    this.http.get('https://invalid-domain-that-does-not-exist.com/api/data').subscribe({
      next: (response) => {
        console.log('Unexpected success:', response);
        this.isLoading = false;
      },
      error: (error) => {
        this.handleError(error, 'GET invalid-domain');
        this.isLoading = false;
      }
    });
  }

  private handleError(error: HttpErrorResponse, requestInfo: string) {
    console.error('❌ HTTP Error:', error);
    
    let errorMessage = '';
    let errorType = 'error';
    
    if (error.status === 0) {
      errorMessage = 'Network error - check your connection';
      errorType = 'network';
    } else if (error.status === 404) {
      errorMessage = 'Resource not found (404)';
      errorType = '404';
    } else if (error.status >= 500) {
      errorMessage = `Server error (${error.status})`;
      errorType = 'server';
    } else {
      errorMessage = `HTTP Error ${error.status}: ${error.statusText}`;
    }
    
    this.responses.unshift({
      type: errorType,
      status: error.status,
      message: `${requestInfo} - ${errorMessage}`,
      data: error.message,
      timestamp: new Date().toLocaleTimeString()
    });
  }

  clearResponses() {
    this.responses = [];
  }
}
