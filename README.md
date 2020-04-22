# CGIFront for CGI Summer internship 2020

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

Frontend for displaying information about movies received from the backend and being easy to use for a customer.

## Things I altered from the original task.
Instead of a movie only having 1 category, I opted for giving movies multiple categories.

## Task completion assessment
### Stage 1. 
- [x] a) Display movie list. In the list display movie title, category, year and rating.
### Stage 2. 
- [x] a) Add a search function for searching movies by titles
- [x] b) Further develop the search by adding an autocomplete function
### Stage 3. 
- [x] a) Add the opportunity for filtering the movies by categories.
- [x] b) Further develop the filtering functionality so the user can choose multiple categories.
### Stage 4. 
- [x] a) Add a detailed movie view functionality. Display the movie's title, year, rating and the description.

## Running the development server

1. Download/clone the project.
2. Open up a command prompt and `cd` into the project folder.
2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Images
### Navigation:
  Movies takes you to movie list and filter, Search takes you to search page.

![Image of Movie Navigation](https://github.com/aneelm/images/blob/master/CGIInternship/navigation.png?raw=true)


### Movie List:
  With no filters applied it displays all movies, clicking on any of the names takes you to a more detailed view of them.
  
![Image of Movie List](https://github.com/aneelm/images/blob/master/CGIInternship/movieList.png?raw=true)

### Movie Filter:
  Selecting filters and hitting submit searches for all movies which has any of the selected categories.
  
![Image of Movie Category Filter](https://github.com/aneelm/images/blob/master/CGIInternship/categoryFilter.png?raw=true)

  Example of when filtering for drama

![Image of Movie Category Filter Drama](https://github.com/aneelm/images/blob/master/CGIInternship/filterByDrama.png?raw=true)

### Movie Search:
  Typing in the search bar will automatically search for all movie titles containing the search term if the search bar has been inactive for 300ms, it autocompletes the searches for you. Clicking on any of the movies in the list takes you to their detailed view.

![Image of Movie Search](https://github.com/aneelm/images/blob/master/CGIInternship/movieSearch.png?raw=true)

### Detailed View:
  Detailed view of a movie, here it also displays the description, when on the main page it did not.
  
![Image of Movie Detail](https://github.com/aneelm/images/blob/master/CGIInternship/detailedView.png?raw=true)

## Structure
![Image of Components](https://github.com/aneelm/images/blob/master/CGIInternship/StructueToView.png?raw=true)

**app-routing.module.ts** links different urls to different components. For example: "/movies" displays MovieListComponent

**constants.ts** holds and exports constants, in this particular case, it exports an array of ids and category names.

**movie.service.ts** handles requests all the different components makes and talk between the backend and those components.

**movie.ts** is the Movie class.

![Image of Last Structure](https://github.com/aneelm/images/blob/master/CGIInternship/lastStructure.png?raw=true)

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

