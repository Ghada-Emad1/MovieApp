import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  _httpClient = inject(HttpClient);
  headers = new HttpHeaders({
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmM2NDI3MzJlNmQ2MWJjZTU3MDdiNWZmZTZjOWVlZSIsIm5iZiI6MTc0NTcxNDY5MS42MzEsInN1YiI6IjY4MGQ3ZTAzYmFhYzFjNWE3ZDgwZjg3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOQnBwgSm73sOHcEPXAVLSHf6ZKzAwUTTBwFXMD-ULs',
  });
  getAllSevice(): Observable<any> {
    return this._httpClient.get(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      { headers: this.headers }
    );
  }

  getMovie(): Observable<any> {
    return this._httpClient.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      { headers: this.headers }
    );
  }

  movieDetails(id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-U`,
      { headers: this.headers }
    );
  }

  getTv(): Observable<any> {
    return this._httpClient.get(
      'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
      { headers: this.headers }
    );
  }
  tvDetails(id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
      { headers: this.headers }
    );
  }

  getPeople(): Observable<any> {
    return this._httpClient.get(
      'https://api.themoviedb.org/3/trending/person/day?language=en-US',
      { headers: this.headers }
    );
  }
  peopleDetails(id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/person/${id}?language=en-US`,
      { headers: this.headers }
    );
  }
}
