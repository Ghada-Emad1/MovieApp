import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router} from '@angular/router';
import { MovieDetails } from '../../interfaces/all-movie';


@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit{
  _movie_details = inject(MovieService);
  router = inject(Router);
  movieDetails!: MovieDetails;
  
  ngOnInit(): void {
      this.getMovieDetails();
  }
  getMovieDetails() {
    const movieId =parseInt(this.router.url.split('/')[2]);
    this._movie_details.movieDetails(movieId).subscribe({
      next: (res) => {
        this.movieDetails = res;
        console.log(this.movieDetails);
      },
      error: (err: any) => { 
        console.log(err);
      },
      complete: () => {
        console.log('Movie details fetched successfully');
      },
    });
  }
  
}
