import AlladinCover  from './alladin.jpg'
import Avengers  from './avengers.jpg'
import CaptainMarvel  from './captain-marvel.jpg'
import DarkPhoenix  from './dark-phoenix.jpg'
import Glass  from './glass.jpg'
import Shazam  from './shazam.jpg'
import Spiderman  from './spiderman-far-from-home.jpg'
import StarWars  from './star-wars.jpg'
import ToyStory  from './toy-story-4.jpg'


export const GetCovers = movieName => {
    switch(movieName) {
        case 'alladin': return AlladinCover
        case 'avengers': return Avengers
        case 'captain-marvel': return CaptainMarvel
        case 'dark-phoenix': return DarkPhoenix
        case 'glass': return Glass
        case 'shazam': return Shazam
        case 'spiderman-far-from-home': return Spiderman
        case 'star-wars': return StarWars
        case 'toy-story-4': return ToyStory
        default:
            return null
    }
}