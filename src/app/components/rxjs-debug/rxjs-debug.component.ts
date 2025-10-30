import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, Subject, interval, of, throwError } from 'rxjs';
import { map, filter, tap, catchError, takeUntil, delay, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-debug',
  imports: [RouterModule, CommonModule],
  templateUrl: './rxjs-debug.component.html',
  styleUrl: './rxjs-debug.component.scss'
})
export class RxjsDebugComponent implements OnDestroy {
  results: string[] = [];
  isRunning = false;
  private destroy$ = new Subject<void>();

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  runBasicObservable() {
    this.results = [];
    this.isRunning = true;

    const numbers$ = of(1, 2, 3, 4, 5).pipe(
      tap(value => console.log('Original value:', value)),
      map(value => value * 2),
      tap(value => console.log('After map (*2):', value)),
      filter(value => value > 4),
      tap(value => console.log('After filter (>4):', value)),
      takeUntil(this.destroy$)
    );

    numbers$.subscribe({
      next: (value) => {
        console.log('Final value:', value);
        this.results.push(`Final value: ${value}`);
      },
      complete: () => {
        this.results.push('Observable completed');
        this.isRunning = false;
      }
    });
  }



  runErrorHandling() {
    this.results = [];
    this.isRunning = true;

    const dataWithError$ = of('data1', 'data2', 'error', 'data4', 'data5').pipe(
      tap(value => console.log('Processing:', value)),
      switchMap(value => {
        if (value === 'error') {
          console.log('Simulating error...');
          return throwError(() => new Error('Simulated error occurred!'));
        }
        return of(value.toUpperCase()).pipe(delay(500));
      }),
      tap(value => console.log('After switchMap:', value)),
      catchError(error => {
        console.error('Caught error:', error.message);
        this.results.push(`❌ Error caught: ${error.message}`);
        return of('RECOVERED');
      }),
      tap(value => console.log('After error handling:', value)),
      takeUntil(this.destroy$)
    );

    dataWithError$.subscribe({
      next: (value) => {
        this.results.push(`✅ Success: ${value}`);
      },
      error: (error) => {
        this.results.push(`💥 Unhandled error: ${error.message}`);
        this.isRunning = false;
      },
      complete: () => {
        this.results.push('Observable completed');
        this.isRunning = false;
      }
    });
  }

  runChainedOperators() {
    this.results = [];
    this.isRunning = true;

    const simpleChain$ = of(10, 20, 30, 40, 50).pipe(
      tap(value => console.log('Original value:', value)),
      map(value => value * 2),
      tap(value => console.log('After multiply by 2:', value)),
      filter(value => value > 50),
      tap(value => console.log('After filter (>50):', value)),
      takeUntil(this.destroy$)
    );

    simpleChain$.subscribe({
      next: (data) => {
        console.log('Final value:', data);
        this.results.push(`Final value: ${data}`);
      },
      complete: () => {
        this.results.push('Chain completed');
        this.isRunning = false;
      }
    });
  }

  clearResults() {
    this.results = [];
    this.destroy$.next();
  }
}
