import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ResponseService } from './response.service';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
