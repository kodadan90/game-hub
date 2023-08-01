
import GenreList from "../components/GenreList";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => ({data: GenreList, isLoading: false, error: null})

export  default useGenres;