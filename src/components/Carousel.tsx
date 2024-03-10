import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import CircleIcon from '@mui/icons-material/Circle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import { Button, Chip, Slide, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import Util from '../Util'
import { Film } from '../types/Film'

interface Props {
    filmList: Film[]
}

export default function Carousel(props: Props) {
    const carouselList: Film[] = [
        props.filmList[0],
        props.filmList[1],
        props.filmList[2],
        props.filmList[3],
        props.filmList[4],
        props.filmList[5],
        props.filmList[6],
        props.filmList[7],
        props.filmList[8],
        props.filmList[9]
    ]
    const [prevActiveSlide, setPrevActiveSlide] = useState<number>(-1)
    const [activeSlide, setActiveSlide] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide(prevSlide => (prevSlide + 1) % 10)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setPrevActiveSlide(activeSlide)
    }, [activeSlide])

    const handleSlideChange = (index: number) => {
        setActiveSlide((index) > carouselList.length ? 0 : (index))
    }

    return <Stack
        sx={{
            alignItems: 'center'
        }}
        mt={2}
    >
        {carouselList.map((carousel, index) => {
            return index === activeSlide ? <Slide key={carousel.imdbid} direction={prevActiveSlide > activeSlide ? 'right' : 'left'} in={index === activeSlide} mountOnEnter unmountOnExit>
                <Stack
                    width='95%'
                    sx={{
                        background: 'black',
                        color: 'white'
                    }}
                    borderRadius={5}
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    columnGap={2}
                    p={2}
                    position='relative'
                    border='5px solid #2196f3'
                    overflow='hidden'
                >
                    <Stack
                        onClick={() => setActiveSlide(prevSlide => (prevSlide - 1) < 0 ? 9 : (prevSlide - 1))}
                        display='flex'
                        direction='column'
                        justifyContent='center'
                        position='absolute'
                        top={0}
                        left={0}
                        height='100%'
                        width='20%'
                        sx={{
                            background: 'transparent',
                            transition: 'background-color 0.3s',
                            color: 'transparent',
                            '&:hover': {
                                backgroundImage: 'linear-gradient(to left, transparent, rgba(33, 150, 243, 0.5))',
                                color: 'white'
                            }
                        }}
                    >
                        <ChevronLeftIcon
                            sx={{
                                position: 'absolute',
                                left: -15,
                                fontSize: 100
                            }}
                        />
                    </Stack>
                    <img src={carousel.image} width='250px' alt={carousel.title} />
                    <Stack>
                        <Typography variant='h4' sx={{ cursor: 'pointer' }}>{carousel.title} ({carousel.year})</Typography>
                        <Typography variant='h6'>{carousel.description}</Typography>
                        <Stack
                            display='flex'
                            flexDirection='row'
                            columnGap={2}
                            mt={3}
                        >
                            {carousel.genre.map((genre) => {
                                return <Chip label={genre} sx={{ backgroundColor: new Util().randomColor(), color: 'white', fontSize: 20, fontWeight: 'bold', cursor: 'pointer' }} />
                            })}
                        </Stack>
                    </Stack>
                    <Stack
                        onClick={() => setActiveSlide(prevSlide => (prevSlide + 1) % 10)}
                        display='flex'
                        direction='column'
                        justifyContent='center'
                        position='absolute'
                        top={0}
                        right={0}
                        height='100%'
                        width='20%'
                        sx={{
                            background: 'transparent',
                            transition: 'background-color 0.3s',
                            color: 'transparent',
                            '&:hover': {
                                backgroundImage: 'linear-gradient(to right, transparent, rgba(33, 150, 243, 0.5))',
                                color: 'white'
                            }
                        }}
                    >
                        <ChevronRightIcon
                            sx={{
                                position: 'absolute',
                                right: -15,
                                fontSize: 100
                            }}
                        />
                    </Stack>
                </Stack>
            </Slide> : <></>
        })}
        <Stack
            display='flex'
            flexDirection='row'
            mt={2}
        >
            {carouselList.map((carousel, index) => {
                return activeSlide === index ? <Button key={carousel.imdbid}><CircleIcon sx={{ fontSize: 20 }} /></Button> : <Button key={carousel.imdbid} onClick={() => handleSlideChange(index)}><CircleOutlinedIcon sx={{ fontSize: 20 }} /></Button>
            })}
        </Stack>
    </Stack>
}