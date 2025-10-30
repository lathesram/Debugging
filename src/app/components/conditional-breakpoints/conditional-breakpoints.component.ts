import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conditional-breakpoints',
  imports: [RouterModule, CommonModule],
  templateUrl: './conditional-breakpoints.component.html',
  styleUrl: './conditional-breakpoints.component.scss'
})
export class ConditionalBreakpointsComponent {
  results: string[] = [];
  isRunning = false;

  runConditionalDemo() {
    this.isRunning = true;
    this.results = [];
    
    for (let i = 0; i < 10; i++) {
      const value = Math.random() * 100;
      const rounded = Math.round(value);
      
      this.processValue(i, rounded);
      this.results.push(`Iteration ${i}: value=${rounded}`);
      
      if (i === 5) {
        // Special processing
      }
      
      if (rounded > 75) {
        // High value processing
      }
    }
    
    this.isRunning = false;
  }

  processValue(index: number, value: number) {
    const category = this.categorizeValue(value);
    
    if (index % 2 === 0 && value > 30) {
      return 'even-high';
    } else if (index % 2 === 1 && value < 50) {
      return 'odd-low';
    }
    
    return category;
  }

  categorizeValue(value: number): string {
    if (value < 25) {
      return 'low';
    } else if (value < 75) {
      return 'medium';
    } else {
      return 'high';
    }
  }



  clearResults() {
    this.results = [];
  }
}
