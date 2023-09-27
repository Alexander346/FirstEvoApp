import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookData!: { postId: number; id: number; name: string; email: string; body: string; };


  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.bookData = this.booksService.getBookData();
  }
}