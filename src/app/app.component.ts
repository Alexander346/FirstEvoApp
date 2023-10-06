import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Book {
  title: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookF: FormGroup;
  box: Book[] = [
    { title: 'Мёртвые души', author: 'Николай Гоголь' },
    { title: 'Граф Монте-Кристо', author: 'Александр Дюма' },
    { title: 'Золотой теленок', author: 'Илья Ильф, Евгений Петров' }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.bookF = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.pattern(/^[\u0410-\u044F]+$/i),
        Validators.maxLength(10)
      ]],
      author: ['', [
        Validators.required,
        Validators.pattern(/^[\u0410-\u044F]+$/i),
        Validators.maxLength(10)
      ]]
    });
  }

  onSubmit(): void {
    if (this.bookF && this.bookF.valid) {
      const nameControl = this.bookF.get('name');
      const authorControl = this.bookF.get('author');
  
      if (nameControl && authorControl) {
        const newBook: Book = {
          title: nameControl.value,
          author: authorControl.value
        };
  
        this.box.push(newBook);
        this.resetForm();
      }
    }
  }

  resetForm(): void {
    this.bookF.reset();
  }
}
