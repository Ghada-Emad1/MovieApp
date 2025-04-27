import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ArtistProfile } from '../../interfaces/all-movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-people',
  imports: [RouterLink],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit{
   allArtist!:ArtistProfile[];
  _getpeople = inject(MovieService)
 
  
  ngOnInit(): void {
    this.getPeople();
  }
  getPeople() {
    this._getpeople.getPeople().subscribe({
      next: (res) => {
        this.allArtist = res.results;
        console.log(this.allArtist);
      },
      error:(err)=>{
        console.log(err);
      },
      complete: () => {
        console.log('get all artists profile successfully');
      }
    })
  }
}
