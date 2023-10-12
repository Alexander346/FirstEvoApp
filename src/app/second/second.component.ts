import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit{
    post: any;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.dataService.fetchPosts().subscribe(response => {
            this.post = response;
            console.log('Посты получены:', this.post);
        }, error => {
            console.error('Произошла ошибка данных:', error);
        });
    }
}