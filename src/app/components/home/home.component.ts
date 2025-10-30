import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface DebugCard {
  title: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  debugCards: DebugCard[] = [
    {
      title: 'Console Logging',
      description: 'Learn different console methods and styled logging techniques',
      route: '/console-logging',
      icon: '🖥️'
    },
    {
      title: 'Breakpoints',
      description: 'Master setting and using breakpoints in DevTools',
      route: '/breakpoints',
      icon: '🔍'
    },
    {
      title: 'Conditional Breakpoints',
      description: 'Use conditional logic to pause execution at specific conditions',
      route: '/conditional-breakpoints',
      icon: '⚡'
    },
    {
      title: 'Network Debugging',
      description: 'Debug HTTP requests and API calls in the Network tab',
      route: '/network-debug',
      icon: '🌐'
    },
    {
      title: 'Content Overriding',
      description: 'Override network responses using DevTools overrides',
      route: '/network-override',
      icon: '🔄'
    },
    {
      title: 'Source Maps & Error Tracing',
      description: 'Understand stack traces and source map debugging',
      route: '/source-maps',
      icon: '📍'
    },
    {
      title: 'DOM & Data Binding Debugging',
      description: 'Debug Angular data binding and DOM manipulation issues',
      route: '/dom-debug',
      icon: '🔗'
    },
    {
      title: 'Network Tab Essentials',
      description: 'Essential network debugging techniques and error handling',
      route: '/network-tab',
      icon: '📊'
    },
    {
      title: 'Augury (Angular DevTools)',
      description: 'Use Angular DevTools to inspect component hierarchy',
      route: '/augury',
      icon: '🔧'
    },
    {
      title: 'Debugger Keyword',
      description: 'Use the debugger statement to pause execution programmatically',
      route: '/debugger-keyword',
      icon: '⏸️'
    },
    {
      title: 'Async / RxJS Debugging',
      description: 'Debug asynchronous operations and RxJS streams',
      route: '/rxjs-debug',
      icon: '🔄'
    }
  ];
}
