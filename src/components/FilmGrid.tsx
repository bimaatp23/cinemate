import { Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import { Film } from '../types/Film'

interface Props {
    filmList: Film[]
}

export default function FilmGrid(props: Props) {
    return <Stack pl={2} pb={2} mt={2}>
        <Grid container spacing={2} justifyContent='center'>
            {props.filmList.map(film => (
                <Grid key={film.imdbid} item xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia component='img' image={film.image} alt={film.title} />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='div'>
                                {film.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Stack>
}