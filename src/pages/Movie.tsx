import { Stack, Typography } from '@mui/material'
import Carousel from '../components/Carousel'
import FilmGrid from '../components/FilmGrid'
import { Film } from '../types/Film'

interface Props {
    movieList: Film[]
}

export default function Movie(props: Props) {
    return <Stack>
        {props.movieList.length > 0 ? <Carousel filmList={props.movieList} /> : <></>}
        <Typography align='center' variant='h3' mt={1}>Movies</Typography>
        <FilmGrid filmList={props.movieList} />
    </Stack>
}