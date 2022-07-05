class MoviesFactory {
  constructor(data, type) {
    if (type === 'ExternalApi') {
      return new ExternalMovie(data);
    } else if (type === 'newApi') {
      return new Movie(data);
    } else {
      throw 'Unknown format type';
    }
  }
}
