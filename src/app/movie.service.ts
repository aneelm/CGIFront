import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieUrl = 'https://localhost:5001/Movies';

  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl).pipe();
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.movieUrl + `/details/${id}`);
  }

  searchMovies(term: string): Observable<Movie[]> {
    if (!term.trim()) {
      // if not search term, return empty menuitem array.
      return of([]);
    }
    return this.http.get<Movie[]>(this.movieUrl + `/search/?title=${term}`);
  }

  filterMovies(data: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl + `/Filter/?categorieIds=${data}`);
  }
}
