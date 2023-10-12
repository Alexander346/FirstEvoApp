import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ResolveService } from './resolve.service';
import { DataService } from './data.service'; // Импорт сервиса

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ResolveService, DataService], // Добавление сервиса в провайдеры
  bootstrap: [AppComponent]
})
export class AppModule { }
