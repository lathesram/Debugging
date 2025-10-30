import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-augury',
  imports: [RouterModule, CommonModule, ChildComponent],
  templateUrl: './augury.component.html',
  styleUrl: './augury.component.scss'
})
export class AuguryComponent {
  parentMessage = 'Hello from Parent!';
  counterValue = 0;
  items = ['Apple', 'Banana', 'Cherry'];
  user = {
    name: 'John Doe',
    role: 'Developer',
    active: true
  };

  onChildMessage(message: string) {
    console.log('📨 Received from child:', message);
    this.parentMessage = `Child says: ${message}`;
  }

  onCounterChange(newCount: number) {
    console.log('🔢 Counter changed to:', newCount);
    this.counterValue = newCount;
  }

  updateParentData() {
    this.parentMessage = `Updated at ${new Date().toLocaleTimeString()}`;
    this.user = {
      ...this.user,
      name: `User ${Math.floor(Math.random() * 100)}`,
      active: !this.user.active
    };
  }

  addItem() {
    const newItem = `Item ${this.items.length + 1}`;
    this.items.push(newItem);
  }

  resetData() {
    this.parentMessage = 'Hello from Parent!';
    this.counterValue = 0;
    this.items = ['Apple', 'Banana', 'Cherry'];
    this.user = {
      name: 'John Doe',
      role: 'Developer',
      active: true
    };
  }
}
