import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-debugger-keyword',
  imports: [RouterModule, CommonModule],
  templateUrl: './debugger-keyword.component.html',
  styleUrl: './debugger-keyword.component.scss'
})
export class DebuggerKeywordComponent {
  results: string[] = [];

  runBasicDebugger() {
    console.log('⏸️ About to hit debugger statement...');
    this.results = [];
    
    const startTime = Date.now();
    
    // DEBUGGER WILL PAUSE HERE
    debugger;  // ⏸️ Execution will pause here if DevTools is open
    
    const afterDebugger = Date.now();
    
    console.log('✅ Continued after debugger');
    this.results.push(`Debugger paused at: ${new Date(startTime).toLocaleTimeString()}`);
    this.results.push(`Resumed at: ${new Date(afterDebugger).toLocaleTimeString()}`);
  }

  runConditionalDebugger() {
    console.log('⏸️ Running conditional debugger demo...');
    this.results = [];
    
    for (let i = 0; i < 10; i++) {
      const value = Math.random() * 100;
      
      // Conditional debugger - only pauses when condition is true
      if (i === 5) {
        debugger;  // ⏸️ Will only pause when i equals 5
      }
      
      this.results.push(`Loop ${i}: value = ${Math.round(value)}`);
      console.log(`Processing loop ${i}, value: ${value}`);
    }
    
    console.log('✅ Loop completed');
  }

  runFunctionDebugger() {
    console.log('⏸️ Function with debugger...');
    this.results = [];
    
    const userData = {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com'
    };
    
    this.processUserData(userData);
  }

  processUserData(user: any) {
    console.log('📋 Processing user data:', user);
    
    // DEBUGGER IN FUNCTION
    debugger;  // ⏸️ Pause here to inspect the user parameter
    
    const processedData = {
      ...user,
      processedAt: new Date().toISOString(),
      isValid: this.validateUser(user)
    };
    
    this.results.push(`Processed user: ${processedData.name}`);
    this.results.push(`Valid: ${processedData.isValid}`);
    this.results.push(`Processed at: ${processedData.processedAt}`);
    
    return processedData;
  }

  validateUser(user: any): boolean {
    // Another debugger to inspect validation logic
    debugger;  // ⏸️ Pause here to inspect validation
    
    return !!(user.name && user.email && user.age);
  }

  runAsyncDebugger() {
    console.log('⏸️ Async operation with debugger...');
    this.results = [];
    
    this.results.push('Starting async operation...');
    
    setTimeout(() => {
      debugger;  // ⏸️ Pause in async callback
      
      console.log('📅 Inside setTimeout callback');
      this.results.push('Async operation completed!');
      this.results.push(`Completed at: ${new Date().toLocaleTimeString()}`);
    }, 2000);
    
    this.results.push('Async operation scheduled (will complete in 2 seconds)');
  }

  clearResults() {
    this.results = [];
  }
}
