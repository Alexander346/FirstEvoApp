import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <div *ngIf="data$ | async as data">
      {{ data | json }}
    </div>
  `
})
export class SecondComponent {
  data$ = this.route.data;

  constructor(private route: ActivatedRoute) {}
}
