import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DataResolver } from './resolve.service';
import { DataService } from './data.service';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'second-component/:id', component: SecondComponent, resolve: { resolvedData: DataResolver } },
  // Другие роуты
];

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, DataResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
