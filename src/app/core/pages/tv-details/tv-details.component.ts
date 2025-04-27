import { Component, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { tvDetailsList } from '../../interfaces/all-movie';

@Component({
  selector: 'app-tv-details',
  imports: [],
  templateUrl: './tv-details.component.html',
  styleUrl: './tv-details.component.css'
})
export class TvDetailsComponent {
  _tvDetails = inject(MovieService)
  tvDetailsList!: tvDetailsList
  router=inject(Router)

  ngOnInit(): void {
    
    this.getTvDetails();
  }
  
  getTvDetails() {
    const tvDetails = parseInt(this.router.url.split('/')[2]);
    this._tvDetails.tvDetails(tvDetails).subscribe({
      next: (res) => {
        this.tvDetailsList = res;
        console.log(this.tvDetailsList)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('get details of tv successfully');
      }
    })
  }
}
