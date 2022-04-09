import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './pages/features/features.component';
import { HomeComponent } from './pages/home/home.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2/pagina2.component';
import { Pagina3Component } from './pages/pagina3/pagina3.component';
import { Pagina4Component } from './pages/pagina4/pagina4.component';
import { Pagina5Component } from './pages/pagina5/pagina5.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'home',
    data: { breadcrumb: 'home' },
    component: HomeComponent,
  },
  {
    path: 'features',
    data: { breadcrumb: 'features' },
    component: FeaturesComponent,
  },
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina3', component: Pagina3Component },
  { path: 'pagina4', component: Pagina4Component },
  { path: 'pagina5', component: Pagina5Component },
  {
    path: 'users-list',
    data: { breadcrumb: 'usersList' },
    component: UsersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
