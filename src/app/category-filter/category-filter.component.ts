import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {constants} from '../constants';
import {MovieService} from '../movie.service';
import {Observable} from 'rxjs';
import {MovieListComponent} from '../movie-list/movie-list.component';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  form: FormGroup;
  readonly ordersData : Array<any> = constants.categoryData;
  constructor(private movieService: MovieService,
              private formBuilder: FormBuilder,
              private movieListComponent: MovieListComponent) {
    this.form = this.formBuilder.group({
      checkArray: this.formBuilder.array([])
    });
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    if (!(this.form.value.checkArray.length == 0)) {
      console.log(this.form.value.checkArray.toString());
      this.movieListComponent.movies$ = this.movieService.filterMovies(this.form.value.checkArray.toString())
    } else {
      this.movieListComponent.ngOnInit()
    }
  }

  ngOnInit(): void {
  }
}
