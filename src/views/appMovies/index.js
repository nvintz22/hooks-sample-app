import React, { useEffect, useState, Fragment } from 'react'
import styled from '@emotion/styled'
import { FindMovies } from '../../helpers/searchMovie'
import { Group, Input, Label, Bar } from '../../resources/emotions/forms'
import { MovieList, Cover } from '../../resources/emotions/movie'

const AppMovies = () => {
    const [movies, setMovies] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        const foundMovies = FindMovies(keyword)
        setMovies(foundMovies)
    }, [movies.length, keyword])

    const handleChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <Fragment>
            <Group className="group">      
                <Input type="text" required onChange={handleChange} value={keyword}/> 
                <span className="highlight"></span>
                <Bar className="bar"></Bar>
                <Label>Search Movies</Label>
            </Group>
            <MovieList>
            {
                movies.map(movie => (
                    <div>
                        <Cover src={movie.cover_image} />
                    </div>
                ))
            }
            </MovieList>
        </Fragment>
    )
}

export default AppMovies