import { Chip, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import Util from '../Util'
import FilmGrid from '../components/FilmGrid'
import { Film } from '../types/Film'

interface Props {
    filmList: Film[]
}

export default function Genre(props: Props) {
    const [showFilmList, setShowFilmList] = useState<Film[]>([])
    const genres: string[] = [
        'Action',
        'Adventure',
        'Biography',
        'Comedy',
        'Crime',
        'Drama',
        'Family',
        'Fantasy',
        'Film-Noir',
        'History',
        'Horror',
        'Music',
        'Musical',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Thriller',
        'War',
        'Western'
    ]
    const [activeGenre, setActiveGenre] = useState<string[]>([])

    useEffect(() => {
        if (activeGenre.length === 0) {
            setShowFilmList([])
        } else {
            setShowFilmList(props.filmList.filter((film) => film.genre.some((filmGenre) => activeGenre.includes(filmGenre))))
        }
    }, [activeGenre])

    const handleGenreChange = (newGenre: string) => {
        if (activeGenre.includes(newGenre)) {
            setActiveGenre(activeGenre.filter((genre) => genre !== newGenre))
        } else {
            setActiveGenre((prevData) => [...prevData, newGenre])
        }
    }

    return <Stack>
        <Stack
            display='flex'
            flexDirection='row'
            gap={2}
            flexWrap='wrap'
            mt={2}
            justifyContent='center'
            px={30}
        >
            {genres.map((genre) => {
                return <Chip label={genre} onClick={() => handleGenreChange(genre)} sx={{ backgroundColor: activeGenre.includes(genre) ? new Util().randomColor() : 'grey', color: 'white', fontSize: 20, fontWeight: 'bold', cursor: 'pointer' }} />
            })}
        </Stack>
        <FilmGrid filmList={showFilmList} />
    </Stack>
}