import { Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import FilmGrid from '../components/FilmGrid'
import { Film } from '../types/Film'

interface Props {
    searchValue: string
    filmList: Film[]
}

export default function Search(props: Props) {
    const [showFilmList, setShowFilmList] = useState<Film[]>([])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        if (props.searchValue.length === 0) {
            setShowFilmList([])
        } else {
            setShowFilmList(props.filmList.filter((film) => film.title.toLowerCase().includes(props.searchValue.toLocaleLowerCase())))
        }
    }, [props.searchValue])
    /* eslint-enable react-hooks/exhaustive-deps */

    return <Stack>
        {showFilmList.length > 0 ? <FilmGrid filmList={showFilmList} /> : <Typography align='center' variant='h4' mt={1}>Oops! No films found with that keyword</Typography>}
    </Stack>
}