import { Component, inject, OnInit } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';
import { MovieService } from '../../services/movie.service';
import { MovieList } from '../../interfaces/all-movie';
import { ShortenPipe } from '../../pipes/shorten.pipe';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  imports: [ShortenPipe,RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  movielist!: MovieList[];
  _movies = inject(MovieService)
  router=inject(Router)
  
  ngOnInit(): void {
    this.getMovie();
  }
  getMovie() {
    this._movies.getMovie().subscribe({
      next: (res) => {
        this.movielist = res.results;
        console.log(this.movielist);
      },
      error: (err:any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Movies fetched successfully');
      }
    })
  }

  
  
}
