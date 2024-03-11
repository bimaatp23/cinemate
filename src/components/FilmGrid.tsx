import { Card, CardContent, CardMedia, Chip, Grid, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Util from '../Util'
import { FilmService, FilmServiceImpl } from '../service/FilmService'
import { Film } from '../types/Film'
import { FilmDetail } from '../types/FilmDetail'
import Detail from './Detail'

interface Props {
    filmList: Film[]
}

export default function FilmGrid(props: Props) {
    const filmService: FilmService = new FilmServiceImpl()
    const [openDetail, setOpenDetail] = useState<boolean>(false)
    const [selectedFilm, setSelectedFilm] = useState<Film | undefined>(undefined)
    const [filmDetail, setFilmDetail] = useState<FilmDetail | undefined>(undefined)

    useEffect(() => {
        if (selectedFilm !== undefined) {
            if (selectedFilm.type === 'Movie') filmService.getMovieDetail(selectedFilm.id).subscribe({
                next: (data: FilmDetail) => {
                    setFilmDetail(data)
                }
            })
            if (selectedFilm.type === 'Series') filmService.getSeriesDetail(selectedFilm.id).subscribe({
                next: (data: FilmDetail) => {
                    setFilmDetail(data)
                }
            })
        }
    }, [selectedFilm])

    const handleOpenDetail = (newSelectedFilm: Film) => {
        setOpenDetail(true)
        setSelectedFilm(newSelectedFilm)
    }

    const handleCloseDetail = () => {
        setOpenDetail(false)
    }

    return <Stack pb={2} mt={2}>
        <Grid container rowGap={5} justifyContent='center'>
            {props.filmList.map(film => (
                <Grid key={film.imdbid} item xs={12} sm={6} md={3} lg={2.4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card
                        sx={{
                            maxWidth: 250,
                            background: 'black',
                            color: 'white',
                            border: '3px solid #2196f3',
                            cursor: 'pointer',
                            '&:hover': {
                                background: '#2196f3',
                                color: 'black'
                            }
                        }}
                        onClick={() => handleOpenDetail(film)}
                    >
                        <CardMedia component='img' image={film.image} alt={film.title} />
                        <CardContent>
                            <Typography gutterBottom variant='h6' component='div'>
                                {film.title} ({film.year})
                            </Typography>
                            <Stack
                                display='flex'
                                flexDirection='row'
                                gap={1}
                                flexWrap='wrap'
                                mt={1}
                            >
                                {film.genre.map((genre) => {
                                    return <Chip label={genre} size='small' sx={{ backgroundColor: new Util().randomColor(), color: 'white', fontSize: 15, fontWeight: 'bold' }} />
                                })}
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        <Detail filmDetail={filmDetail} handleClose={handleCloseDetail} open={openDetail} />
    </Stack>
}