import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  todos: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(
      (data: any[]) => {
        this.todos = data;
        console.log('Данные:', this.todos);
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }
}
