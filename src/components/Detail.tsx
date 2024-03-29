import CloseIcon from '@mui/icons-material/Close'
import { Box, Chip, IconButton, Modal, Stack, Typography } from '@mui/material'
import Util from '../Util'
import { FilmDetail } from '../types/FilmDetail'

interface Props {
    open: boolean
    handleClose(): void
    filmDetail: FilmDetail | undefined
}

export default function Detail(props: Props) {
    return <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
    >
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '50vw',
                bgcolor: 'black',
                boxShadow: 24,
                p: 4,
                border: '3px solid #2196f3',
                outline: 'none',
                borderRadius: 5
            }}
        >
            <IconButton
                aria-label='close'
                onClick={props.handleClose}
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
            >
                <CloseIcon color='primary' />
            </IconButton>
            {props.filmDetail !== undefined ? <>
                <iframe
                    width="100%"
                    height="400"
                    src={props.filmDetail.trailer}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <Typography variant='h5' id='modal-title' sx={{ mt: 1 }}>
                    {props.filmDetail.title} ({props.filmDetail.year})
                </Typography>
                <Typography id='modal-description'>
                    {props.filmDetail.description}
                </Typography>
                <Stack
                    display='flex'
                    flexDirection='row'
                    gap={1}
                    flexWrap='wrap'
                    mt={1}
                >
                    {props.filmDetail.genre.map((genre) => {
                        return <Chip label={genre} size='small' sx={{ backgroundColor: new Util().randomColor(), color: 'white', fontSize: 15, fontWeight: 'bold' }} />
                    })}
                </Stack>
            </> : <></>}
        </Box>
    </Modal>
}