import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies$ = this.getAllMovies();
  }

  getAllMovies(): Observable<Movie[]> {
    return this.movieService.getAllMovies();
  }

}
