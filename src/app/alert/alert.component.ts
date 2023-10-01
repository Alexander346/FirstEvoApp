import { Component } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  showSuccessNotification() {
    Notiflix.Notify.success('Выполнено!');
  }

  showErrorNotification() {
    Notiflix.Notify.failure('Ошибка!');
  }

  showCustomNotification() {
    Notiflix.Notify.info('Информация!');
  }
}