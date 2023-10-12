import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Импорт Router
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router: Router, public dataService: DataService) {}

    fetchPosts() {
        this.dataService.fetchPosts().subscribe(response => {
            console.log('Посты:', response);
        });
    }

    fetchComments() {
        this.dataService.fetchComments(1).subscribe(response => {
            console.log('Комментарии:', response);
        });
    }

    createPost() {
        this.dataService.createPost().subscribe(response => {
            console.log('Пост создан:', response);
        });
    }

    getWithErrorHandling() {
        this.dataService.getWithErrorHandling().subscribe({
            next: (response) => {
                console.log('Ошибки проверенны:', response);
            },
            error: (error) => {
                console.error('Ошибка: ', error);
            },
        });
    }

    getWithHeaders() {
        this.dataService.getWithHeaders().subscribe(response => {
            console.log('Результат:', response);
        });
    }

    deletePost() {
        this.dataService.deletePost().subscribe(response => {
            console.log('Пост удален:', response);
        });
    }

    NavigationToSecondComponent() {
        this.router.navigate(['/second']);
    }
}