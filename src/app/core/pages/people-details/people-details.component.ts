import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { ArtistInfo } from '../../interfaces/all-movie';

@Component({
  selector: 'app-people-details',
  imports: [],
  templateUrl: './people-details.component.html',
  styleUrl: './people-details.component.css'
})
export class PeopleDetailsComponent implements OnInit{
  _peopleInfo = inject(MovieService)
  artistInfo!: ArtistInfo;
  router=inject(Router)
  
  ngOnInit(): void {
      this.getPeopleDetails()
  }
  getPeopleDetails() {
    const artistId = parseInt(this.router.url.split('/')[2]);
    this._peopleInfo.peopleDetails(artistId).subscribe({
      next: (res) => {
        this.artistInfo = res;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('get artist data successfully');
      }
    })
  }
}
