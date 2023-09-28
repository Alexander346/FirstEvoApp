import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstEvoApp';

  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'og:description', content: 'root_desc' });
  }
}
