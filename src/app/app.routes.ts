import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllComponent } from './core/pages/all/all.component';
import { MoviesComponent } from './core/pages/movies/movies.component';
import { PeopleComponent } from './core/pages/people/people.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { MovieDetailsComponent } from './core/pages/movie-details/movie-details.component';
import { TvComponent } from './core/pages/tv/tv.component';
import { TvDetailsComponent } from './core/pages/tv-details/tv-details.component';
import { PeopleDetailsComponent } from './core/pages/people-details/people-details.component';

export const routes: Routes = [
  { path: '', component: AppComponent, title: 'Home' },
  { path: 'all', component: AllComponent, title: 'All' },
  { path: 'movies', component: MoviesComponent, title: 'Movies' },
  { path: 'tv', component: TvComponent, title: 'Tv' },
  { path: 'people', component: PeopleComponent, title: 'People' },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent,
    title: 'Details',
  },
  { path: 'tv-details/:id', component: TvDetailsComponent, title: 'Tv Details' },
  {path:'people-details/:id',component:PeopleDetailsComponent,title:'People Details'},
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
