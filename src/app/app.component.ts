import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';

  items = [
    { date: new Date(), number: 10 },
    { date: new Date(), number: 20 },
    { date: new Date(), number: 30 },
  ];
}
