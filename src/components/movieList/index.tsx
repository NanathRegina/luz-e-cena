import styles from "./movieList.module.css"
import CardMovie from "../cardMovie"
import type { Movie } from '../../types'

interface MovieListProps{
    movies: Movie[];
}

const MovieList = ({movies}: MovieListProps) => {
    return (
       <ul className={styles.lista}>
           {movies.map((movie) => <CardMovie key={movie.id} {...movie}/>
           )}
       </ul>
    )
}

export default MovieList
