import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-source-maps',
  imports: [RouterModule, CommonModule],
  templateUrl: './source-maps.component.html',
  styleUrl: './source-maps.component.scss'
})
export class SourceMapsComponent {
  errorMessage: string | null = null;

  triggerSimpleError() {
    console.log('🐛 Throwing a simple error for stack trace demonstration');
    try {
      throw new Error('This is a debugging demonstration error!');
    } catch (error: any) {
      console.error('❌ Caught error:', error);
      this.errorMessage = error.message;
    }
  }

  triggerNestedError() {
    console.log('🐛 Triggering nested function error');
    try {
      this.levelOneFunction();
    } catch (error: any) {
      console.error('❌ Nested error caught:', error);
      this.errorMessage = error.message + ' (from nested functions)';
    }
  }

  levelOneFunction() {
    console.log('📍 Level 1 function called');
    this.levelTwoFunction();
  }

  levelTwoFunction() {
    console.log('📍 Level 2 function called');
    this.levelThreeFunction();
  }

  levelThreeFunction() {
    console.log('📍 Level 3 function - about to throw error');
    throw new Error('Error from deep nested function!');
  }



  clearError() {
    this.errorMessage = null;
  }
}
