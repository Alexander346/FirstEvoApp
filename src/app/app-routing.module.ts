import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule),
  },
  {
    path: 'tabs', 
    component: TabsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }