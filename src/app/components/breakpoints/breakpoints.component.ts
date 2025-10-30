import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-breakpoints',
  imports: [RouterModule, CommonModule],
  templateUrl: './breakpoints.component.html',
  styleUrl: './breakpoints.component.scss'
})
export class BreakpointsComponent {
  results: string[] = [];
  isRunning = false;

  runCalculationLoop() {
    this.isRunning = true;
    this.results = [];
    
    let total = 0;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
      total += currentNumber;

      if(i == 5) {
        console.log(total);
        console.log(currentNumber);
      }
      
      this.results.push(`Step ${i + 1}: Adding ${currentNumber}, total now: ${total}`);
      
      this.processNumber(currentNumber, total);
    }
    
    this.results.push(`Final result: ${total}`);
    this.isRunning = false;
  }

  processNumber(num: number, runningTotal: number) {
    const squared = num * num;
    const isEven = num % 2 === 0;
    
    if (isEven) {
      return squared + 1;
    } else {
      return squared - 1;
    }
  }

  runNestedFunction() {
    this.results = [];
    this.levelOne();
  }

  levelOne() {
    const data = { level: 1, message: 'Hello from level 1' };
    this.levelTwo(data);
  }

  levelTwo(data: any) {
    data.level = 2;
    data.message = 'Modified in level 2';
    this.levelThree(data);
  }

  levelThree(data: any) {
    data.level = 3;
    this.results.push(`Final data: ${JSON.stringify(data)}`);
  }

  clearResults() {
    this.results = [];
  }
}
