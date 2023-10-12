import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { ResolveService } from './resolve.service';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'second', component: SecondComponent, resolve: { data: ResolveService } },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
