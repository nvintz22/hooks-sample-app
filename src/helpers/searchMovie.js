import Movies from '../db.json'
import { filter } from 'lodash';

export const FindMovies = keyword => {
    if (keyword) {
        const foundMovies = filter(Movies, qry => qry.title.includes(keyword))
        return foundMovies
    }
    return Movies
}