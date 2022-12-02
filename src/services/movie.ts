import { Movie } from '../types/movie';

export function getMovie(): Promise<Movie> {
  return fetch('api/movie.json')
    .then(res => res.json())
    .then(data => data)
}