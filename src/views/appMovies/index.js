import React, { useEffect, useState, Fragment } from 'react'
import { FindMovies } from '../../helpers/searchMovie'
import { Group, Input, Label, Bar } from '../../resources/emotions/forms';

const AppMovies = () => {
    const [movies, setMovies] = useState([]);
    const [keyword, setKeyword] = useState('');
    useEffect(() => {
        const foundMovies = FindMovies(keyword)
        setMovies(foundMovies)
    }, [movies, keyword])

    const handleChange = e => {
        setKeyword(e.target.value)
    }


    return (
        <Fragment>
            <Group className="group">      
                <Input type="text" required onChange={handleChange} value={keyword}/> 
                <span className="highlight"></span>
                <Bar className="bar"></Bar>
                <Label>Search</Label>
            </Group>
            <ul>
            {
                movies.map(movie => (
                    <li>
                        <small>{movie.title}</small>
                    </li>
                ))
            }
            </ul>
        </Fragment>
    )
}

export default AppMovies