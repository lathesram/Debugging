import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-console-logging',
  imports: [RouterModule, CommonModule],
  templateUrl: './console-logging.component.html',
  styleUrl: './console-logging.component.scss'
})
export class ConsoleLoggingComponent {
  logOutput: string[] = [];

  runBasicLogging() {
    console.log('🔵 Basic log message');
    console.info('ℹ️ Info message');
    console.warn('⚠️ Warning message');
    console.error('❌ Error message');
    
    this.logOutput = [
      'Check the console to see different log levels!'
    ];
  }



  runTableLogging() {
    const users = [
      { id: 1, name: 'John Doe', role: 'Developer' },
      { id: 2, name: 'Jane Smith', role: 'Designer' },
      { id: 3, name: 'Bob Johnson', role: 'Manager' }
    ];

    console.log(users);
    
    console.table(users);
    
    this.logOutput = [
      '📊 User data displayed in table format',
      'Check the console tab to see the formatted table!'
    ];
  }

  runGroupedLogging() {
    console.group('🔧 Application Startup');
    console.log('Initializing components...');
    console.log('Loading configuration...');
      console.groupCollapsed('🔒 Security checks');
      console.log('Validating tokens...');
      console.log('Checking permissions...');
      console.groupEnd();
    console.log('✅ Startup complete');
    console.groupEnd();
    
    this.logOutput = [
      '🔧 Grouped logging demonstration',
      'Check console for organized log groups!'
    ];
  }

  runObjectLogging() {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      preferences: {
        theme: 'dark',
        notifications: true,
        language: 'en'
      },
      roles: ['user', 'developer']
    };

    // const array = [1, 2, 3, { nested: 'object' }, [4, 5, 6]];

    // console.log('📦 Simple object:', user);
    // console.log('📋 Complex array:', array);
    
    // this.logOutput = [
    //   '📦 User object logged to console',
    //   '📋 Complex array with nested elements',
    //   'Check console to explore object structures!'
    // ];

    const name = "Lathes"
    const gender = "Male"

    console.log({name,gender});
  }

  clearOutput() {
    this.logOutput = [];
    console.clear();
  }
}
