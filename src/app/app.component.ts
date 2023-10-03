import { Component, OnInit } from '@angular/core';
import { ResponseService, Response } from './response.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title(title: string) {
    throw new Error('Method not implemented.');
  }
  Array!: Response[];

  constructor(private responseService: ResponseService) {}

  ngOnInit() {
    this.Array = this.responseService.getArray();
  }
}
