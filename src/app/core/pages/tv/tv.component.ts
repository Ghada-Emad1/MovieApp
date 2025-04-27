import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieList, TvList } from '../../interfaces/all-movie';
import { RouterLink } from '@angular/router';
import { ShortenPipe } from '../../pipes/shorten.pipe';

@Component({
  selector: 'app-tv',
  imports: [RouterLink,ShortenPipe],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent implements OnInit{
  tvList!: TvList[];
  _tv = inject(MovieService)
  ngOnInit(): void {
      this.getTv()
  }

  getTv() {
    this._tv.getTv().subscribe({
      next: (res) => {
        this.tvList = res.results;
        console.log(this.tvList);
      },
      error: (err:any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Tv shows fetched successfully');
      }
    })
  }
  

}
