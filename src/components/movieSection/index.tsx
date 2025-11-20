import styles from './movieSection.module.css'
import FieldSet from '../fieldSet'
import InputText from '../inputText'
import Button from '../button'
import {FaSearch} from 'react-icons/fa'
import MovieList from '../movieList'
import useFetchMovies from '../../hooks/useFetchMovies'
import useFilterMovies from '../../hooks/useFilterMovies'

const MovieSection = () => {

    const {movies, isLoading, erro} = useFetchMovies()
    const {searchTerm, setSearchTerm, filteredMovies, handleSearch} = useFilterMovies(movies)

    return (
        <main>
            <section className={styles.container}>
                <FieldSet variant="secundary">
                    <InputText 
                    value = {searchTerm} 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setSearchTerm(event.target.value); 
                        handleSearch()
                        }} 
                        placeholder="Buscar filmes..."/>
                
                <Button variant="icon" onClick={handleSearch}>
                    <FaSearch/>
                </Button>
                </FieldSet>
                <h1 className={styles.titulo}>Em cartaz</h1>
                {isLoading && <p>Carregando filmes..</p>}
                {erro && <p className={styles.erro}>{erro}</p> }
                <MovieList movies={filteredMovies}/>
            </section>
        </main>
    )
}

export default MovieSection
