import { Observable, from, map } from 'rxjs'
import { Film } from '../types/Film'
import { FilmDetail } from '../types/FilmDetail'
import { BaseService, BaseServiceImpl } from './BaseService'

export interface FilmService {
    getMovieList(): Observable<Film[]>
    getSeriesList(): Observable<Film[]>
    getMovieDetail(movieId: string): Observable<FilmDetail>
    getSeriesDetail(seriesId: string): Observable<FilmDetail>
}

export class FilmServiceImpl implements FilmService {
    private baseService: BaseService = new BaseServiceImpl()

    getMovieList(): Observable<Film[]> {
        return from(this.baseService.httpGet('/'))
            .pipe(
                map((response) => {
                    const movieList: Film[] = response.data as Film[]
                    return movieList.map(movie => ({ ...movie, type: 'Movie' }))
                })
            )
    }

    getSeriesList(): Observable<Film[]> {
        return from(this.baseService.httpGet('/series/'))
            .pipe(
                map((response) => {
                    const seriesList: Film[] = response.data as Film[]
                    return seriesList.map(series => ({ ...series, type: 'Series' }))
                })
            )
    }

    getMovieDetail(movieId: string): Observable<FilmDetail> {
        return from(this.baseService.httpGet('/' + movieId))
            .pipe(
                map((response) => {
                    const movieDetail: FilmDetail = {
                        ...response.data as FilmDetail,
                        trailer: response.data.trailer_embed_link
                    }
                    return movieDetail
                })
            )
    }

    getSeriesDetail(seriesId: string): Observable<FilmDetail> {
        return from(this.baseService.httpGet('/series/' + seriesId))
            .pipe(
                map((response) => {
                    const seriesDetail: FilmDetail = {
                        ...response.data as FilmDetail,
                        trailer: response.data.trailer_embed_link
                    }
                    return seriesDetail
                })
            )
    }
}