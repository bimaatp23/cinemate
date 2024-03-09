import CircleIcon from '@mui/icons-material/Circle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import { Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'
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
        props.filmList[4]
    ]
    const [activeSlide, setActiveSlide] = useState<number>(0)

    const handleSlideChange = (index: number) => {
        setActiveSlide((index) > carouselList.length ? 0 : (index))
    }

    return <Stack
        sx={{
            alignItems: 'center'
        }}
        mt={2}
    >
        <Stack
            width='80%'
            sx={{
                background: '#2196f3',
                color: 'white'
            }}
            borderRadius={5}
            display='flex'
            flexDirection='row'
            alignItems='center'
            columnGap={2}
            p={2}
        >
            <img src={carouselList[activeSlide].image} width='200px' />
            <Stack>
                <Typography variant='h5'>{carouselList[activeSlide].title}</Typography>
                <Typography>{carouselList[activeSlide].description}</Typography>
            </Stack>
        </Stack>
        <Stack
            display='flex'
            flexDirection='row'
            mt={2}
        >
            {carouselList.map((carousel, index) => {
                return activeSlide === index ? <Button><CircleIcon /></Button> : <Button onClick={() => handleSlideChange(index)}><CircleOutlinedIcon /></Button>
            })}
        </Stack>
    </Stack>
}