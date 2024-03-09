import { Observable, from, map } from 'rxjs'
import { Film } from '../types/Film'
import { BaseService, BaseServiceImpl } from './BaseService'

export default class FilmService {
    private baseService: BaseService = new BaseServiceImpl()

    getMovieList(): Observable<Film[]> {
        return from(this.baseService.httpGet('/'))
            .pipe(
                map((response) => response.data as Film[])
            )
    }

    getSeriesList(): Observable<Film[]> {
        return from(this.baseService.httpGet('/series/'))
            .pipe(
                map((response) => response.data as Film[])
            )
    }
}