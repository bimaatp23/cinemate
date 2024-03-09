import { Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import { Film } from '../types/Film'

interface Props {
    filmList: Film[]
}

export default function FilmGrid(props: Props) {
    return <Stack pb={2} mt={2}>
        <Grid container rowGap={5} justifyContent='center'>
            {props.filmList.map(film => (
                <Grid key={film.imdbid} item xs={12} sm={6} md={3} lg={2.4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card sx={{
                        maxWidth: 250,
                        background: 'black',
                        color: 'white',
                        border: '3px solid #2196f3',
                        cursor: 'pointer',
                        '&:hover': {
                            background: '#2196f3',
                            color: 'black'
                        }
                    }}>
                        <CardMedia component='img' image={film.image} alt={film.title} />
                        <CardContent>
                            <Typography gutterBottom variant='h6' component='div'>
                                {film.title} ({film.year})
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Stack>
}