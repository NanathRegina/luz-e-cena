import { useEffect, useState } from 'react'
import type { Movie } from '../types';
import { getMovies } from '../api';

//Hook customizado/criado para essa necessidade -> useFetchMovies
//Hook pré existente -> useState, useEffect, useContext
const useFetchMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [erro, setError] = useState<string | null>(null)

    const fetchMovies = async() => {
        setIsLoading(true)
        setError(null)

        try{
            const movies = await getMovies();
            setMovies(movies);
        }
        catch(err){
            setError("Erro ao buscar filmes. Tente novamente")
            console.error(err)
        }
        finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMovies();
    }, [])

    return {movies, isLoading, erro}
}
export default useFetchMovies