import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="getPost()">Get Post</button>
    <button (click)="getComments()">Get Comments</button>
    <button (click)="createPost()">Create Post</button>
    <button (click)="getWithErrorHandling()">Get with Error Handling</button>
    <button (click)="getWithHeaders()">Get with Headers</button>
    <button (click)="deletePost()">Delete Post</button>
    <button (click)="navigateToSecondComponent()">Go to Second Component</button>
  `,
})
export class AppComponent {
  constructor(private dataService: DataService, private router: Router) {}

  getPost() {
    this.dataService.getPost().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  getComments() {
    this.dataService.getComments().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  createPost() {
    this.dataService.createPost().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  getWithErrorHandling() {
    this.dataService.getWithErrorHandling().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  getWithHeaders() {
    this.dataService.getWithHeaders().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  deletePost() {
    this.dataService.deletePost().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        this.handleError(error);
      }
    });
  }

  navigateToSecondComponent() {
    this.router.navigate(['/second-component', 1]);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
  }
}
