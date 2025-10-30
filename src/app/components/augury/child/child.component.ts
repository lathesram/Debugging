import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() message: string = '';
  @Input() counter: number = 0;
  @Input() userData: any = null;

  @Output() messageChange = new EventEmitter<string>();
  @Output() counterChange = new EventEmitter<number>();

  childMessages = [
    'Hello Parent!',
    'Data received!',
    'Child component active',
    'Processing complete'
  ];

  sendMessage() {
    const randomMessage = this.childMessages[Math.floor(Math.random() * this.childMessages.length)];
    console.log('📤 Child sending message:', randomMessage);
    this.messageChange.emit(randomMessage);
  }

  incrementCounter() {
    const newValue = this.counter + 1;
    console.log('🔢 Child incrementing counter to:', newValue);
    this.counterChange.emit(newValue);
  }

  decrementCounter() {
    const newValue = Math.max(0, this.counter - 1);
    console.log('🔢 Child decrementing counter to:', newValue);
    this.counterChange.emit(newValue);
  }
}
