import React from 'react'
import enzymeSerializer from 'enzyme-to-json/serializer'
import { mount } from 'enzyme'
import { FindMovies } from '../../../helpers/searchMovie'
import Movies from '../../../views/appMovies';

expect.addSnapshotSerializer(enzymeSerializer)
expect.addSnapshotSerializer({
    test: val => val.title && val.cover,
    print: val => `${val.cover} ${val.title}`
})

describe('Movies' , () => {
    it('should return all movies', () => {
        const Movies = FindMovies()
        expect(Movies).toMatchSnapshot()
    })
 
    it('should return avengers movie', () => {
        const Avengers = FindMovies('Avengers')
        expect(Avengers).toMatchSnapshot()
    })

    it('should return movie list', () => {
        const MoviesComponent = mount(<Movies />)
        expect(MoviesComponent).toMatchSnapshot()
    })
})