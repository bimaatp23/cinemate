import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import TheatersIcon from '@mui/icons-material/Theaters'
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
import { ChangeEvent, useEffect, useState } from 'react'
import Genre from './pages/Genre'
import Movie from './pages/Movie'
import Search from './pages/Search'
import Series from './pages/Series'
import FilmService from './service/FilmService'
import { Film } from './types/Film'

const SearchField = styled('div')(({ theme }) => ({
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

const RemoveIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
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
    const filmService = new FilmService()
    const pages: string[] = ['Series', 'Movies', 'Genre']
    const [activePage, setActivePage] = useState<string>('Series')
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
    const [movieList, setMovieList] = useState<Film[]>([])
    const [seriesList, setSeriesList] = useState<Film[]>([])
    const [searchValue, setSearchValue] = useState<string>('')

    useEffect(() => {
        filmService.getMovieList().subscribe({
            next: (data: Film[]) => {
                setMovieList(data.sort((a, b) => a.title.localeCompare(b.title)))
            }
        })
        filmService.getSeriesList().subscribe({
            next: (data: Film[]) => {
                setSeriesList(data.sort((a, b) => a.title.localeCompare(b.title)))
            }
        })
    }, [])

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleChangePage = (page: string) => {
        setActivePage(page)
        setAnchorElNav(null)
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
                        <SearchField>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder='Search…'
                                value={searchValue}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            {searchValue.length > 0 ? <RemoveIconWrapper>
                                <CloseIcon onClick={() => setSearchValue('')} />
                            </RemoveIconWrapper> : <></>}
                        </SearchField>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        {searchValue.trim().length > 3 ? <Search filmList={[...movieList, ...seriesList]} searchValue={searchValue} /> : <>
            {activePage === 'Series' ? <Series seriesList={seriesList} /> : <></>}
            {activePage === 'Movies' ? <Movie movieList={movieList} /> : <></>}
            {activePage === 'Genre' ? <Genre filmList={[...movieList, ...seriesList]} /> : <></>}
        </>}
    </>
}