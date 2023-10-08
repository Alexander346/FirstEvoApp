import { Component } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first: any[] = [];
  secondStream: any[] = [];
  firstStream: Subscription = new Subscription();
  second: Subscription = new Subscription();

  startF() {
    const firstStream$: Observable<string> = interval(2000)
      .pipe(
        map(() => {
          const randomValue = Math.floor(Math.random() * 100) + 1;
          return `Random Value: ${randomValue}`;
        })
      );

    this.firstStream = firstStream$.subscribe(value => {
      this.first.push(value);
    });
  }

  startS() {
    const secondStream$: Observable<string> = interval(2000)
      .pipe(
        map(() => {
          const randomValue = Math.floor(Math.random() * 100) + 1;
          return `Random Value: ${randomValue}`;
        })
      );

    this.second = secondStream$.subscribe(value => {
      this.secondStream.push(value);
    });
  }

  stop() {
    this.firstStream.unsubscribe();
    this.second.unsubscribe();
  }
}
