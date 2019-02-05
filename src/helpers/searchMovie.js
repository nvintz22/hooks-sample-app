import Movies from '../db.json'
import { filter } from 'lodash'
import { GetCovers } from '../assets/images/covers/exporter'

export const FindMovies = keyword => {
    const movies = Movies.map(movie => ({...movie, ...{cover_image: GetCovers(movie.cover)}}))
    if (keyword) {
        let foundMovies = filter(movies, qry => qry.title.toUpperCase().includes(keyword.toUpperCase()))
        return foundMovies
    }
    return movies
}