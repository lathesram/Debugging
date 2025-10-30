import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dom-debug',
  imports: [RouterModule, CommonModule],
  templateUrl: './dom-debug.component.html',
  styleUrl: './dom-debug.component.scss'
})
export class DomDebugComponent {
  user: any = null;  // This will cause binding issues
  items: string[] = ['Apple', 'Banana', 'Cherry'];
  count: number = 0;
  isVisible: boolean = true;
  message: string = 'Hello World';

  // Simulate fixing the user object issue
  fixUserBinding() {
    this.user = {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    };
    console.log('✅ User object fixed:', this.user);
  }

  addItem() {
    const newItem = `Item ${this.items.length + 1}`;
    this.items.push(newItem);
    console.log('➕ Added item:', newItem);
  }

  removeItem() {
    if (this.items.length > 0) {
      const removed = this.items.pop();
      console.log('➖ Removed item:', removed);
    }
  }

  incrementCount() {
    this.count++;
    console.log('🔢 Count incremented to:', this.count);
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    console.log('👁️ Visibility toggled to:', this.isVisible);
  }

  updateMessage() {
    this.message = `Updated at ${new Date().toLocaleTimeString()}`;
    console.log('💬 Message updated:', this.message);
  }

  resetAll() {
    this.user = null;
    this.items = ['Apple', 'Banana', 'Cherry'];
    this.count = 0;
    this.isVisible = true;
    this.message = 'Hello World';
    console.log('🔄 All data reset to initial state');
  }

  simulateError() {
    // This will cause an error in the template when user is null
    console.log('🐛 This will cause template errors when user is null');
    this.user = null;
  }

  trackByIndex(index: number, item: any): number {
    return index;
  }
}
