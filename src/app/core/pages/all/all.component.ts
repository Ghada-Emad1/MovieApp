import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { AllMovie } from '../../interfaces/all-movie';
import { ShortenPipe } from '../../pipes/shorten.pipe';

@Component({
  selector: 'app-all',
  imports: [ShortenPipe],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent implements OnInit{
  _allmovies = inject(MovieService)
  allmovieList!: AllMovie[];
  
  ngOnInit(): void {
    this.getAll();    
  }
  getAll() {
    this._allmovies.getAllSevice().subscribe({
      next: (res) => {
        
        this.allmovieList = res.results;
        console.log(this.allmovieList)
      },
      error: (err:any)=>{
        console.error(err)
      },
      complete() {
        console.log('All movies fetched successfully')
      }
    })
  }

}
