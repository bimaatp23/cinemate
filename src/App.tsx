import CircleIcon from '@mui/icons-material/Circle'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import TheatersIcon from '@mui/icons-material/Theaters'
import { Card, CardContent, CardMedia, FormControl, Grid, InputLabel, Select, SelectChangeEvent, Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { alpha, styled } from '@mui/material/styles'
import { useState } from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export default function App() {
  const pages: string[] = ['Series', 'Movies', 'Genre']
  const [activePage, setActivePage] = useState<string>('Series')
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
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
  const films = [
    { id: 1, title: 'Film 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Film 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Film 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Film 4', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Film 5', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Film 6', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Film 7', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Film 8', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, title: 'Film 9', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, title: 'Film 10', imageUrl: 'https://via.placeholder.com/150' }
  ]
  const images = [
    'https://via.placeholder.com/200x300',
    'https://via.placeholder.com/200x300',
    'https://via.placeholder.com/200x300',
    'https://via.placeholder.com/200x300',
  ]
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleChangePage = (page: string) => {
    setActivePage(page)
    setActiveGenre('')
    setAnchorElNav(null)
  }

  const handleSlideChange = (index: number) => {
    setActiveSlide((index) > images.length ? 0 : (index))
  }

  const carousel = () => {
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
        <img src={images[activeSlide]} width='200px' />
        <Stack>
          <Typography variant='h5'>Title</Typography>
          <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil rem illum, similique nemo vel saepe odio repellat voluptate vero commodi magnam neque, reprehenderit esse voluptatem labore laborum quia tempora debitis quod. Commodi sed ducimus quis architecto similique, facere temporibus ex rem maiores saepe! Minima corporis fugit, maxime reiciendis voluptatem distinctio.</Typography>
        </Stack>
      </Stack>
      <Stack
        display='flex'
        flexDirection='row'
        mt={2}
      >
        {images.map((image, index) => {
          return activeSlide === index ? <Button><CircleIcon /></Button> : <Button onClick={() => handleSlideChange(index)}><CircleOutlinedIcon /></Button>
        })}
      </Stack>
    </Stack>
  }

  const filmList = () => {
    return <Stack pl={2} pb={2} mt={2}>
      <Grid container spacing={2} justifyContent='center'>
        {films.map(film => (
          <Grid key={film.id} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component='img' image={film.imageUrl} alt={film.title} />
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

  return <>
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <TheatersIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CINEMATE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleChangePage}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleChangePage(page)}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <TheatersIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CINEMATE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleChangePage(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {['Series', 'Movies'].includes(activePage) ? <>
      {carousel()}
      <Typography align='center' variant='h3' mt={1}>{activePage}</Typography>
      {filmList()}
    </> : <></>}
    {activePage === 'Genre' ? <>
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
      {filmList()}
    </> : <></>}
  </>
}