import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
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
    const [activeGenre, setActiveGenre] = useState<string>('')

    useEffect(() => {
        setShowFilmList([])
        setShowFilmList(props.filmList.filter((film) => film.genre.includes(activeGenre)))
    }, [activeGenre])

    useEffect(() => {
        console.log(showFilmList)
    }, [showFilmList])

    return <Stack>
        <Stack
            alignItems='center'
            mt={2}
        >
            <FormControl
                sx={{
                    width: '40%'
                }}
            >
                <InputLabel id="demo-simple-select-label" size='small'>Genre</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={activeGenre}
                    label="Genre"
                    onChange={(event: SelectChangeEvent) => setActiveGenre(event.target.value)}
                    size='small'
                >
                    {genres.map((genre) => <MenuItem value={genre}>{genre}</MenuItem>)}
                </Select>
            </FormControl>
        </Stack>
        <FilmGrid filmList={showFilmList} />
    </Stack>
}