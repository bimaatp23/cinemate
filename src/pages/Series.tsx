import { Stack, Typography } from '@mui/material'
import Carousel from '../components/Carousel'
import FilmGrid from '../components/FilmGrid'
import { Film } from '../types/Film'

interface Props {
    seriesList: Film[]
}

export default function Series(props: Props) {
    return <Stack>
        {props.seriesList.length > 0 ? <Carousel filmList={props.seriesList} /> : <></>}
        <Typography align='center' variant='h3' mt={1}>Series</Typography>
        <FilmGrid filmList={props.seriesList} />
    </Stack>
}