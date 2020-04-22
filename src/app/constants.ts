export class constants {
  private static _categoryData = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Comedy' },
    { id: 4, name: 'Crime' },
    { id: 5, name: 'Drama' },
    { id: 6, name: 'Fantasy' },
    { id: 7, name: 'Historical' },
    { id: 8, name: 'Horror' },
    { id: 9, name: 'Mystery' },
    { id: 10, name: 'Philosophical' },
    { id: 11, name: 'Political' },
    { id: 12, name: 'Romance' },
    { id: 13, name: 'Satire' },
    { id: 14, name: 'Science fiction' },
    { id: 15, name: 'Thriller' },
    { id: 16, name: 'Urban' },
    { id: 16, name: 'Western' }
  ];

  public static get categoryData(): any {
    return this._categoryData;
  }
}
