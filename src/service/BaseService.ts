import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface BaseService {
    httpGet(url: string, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>>
}

export class BaseServiceImpl implements BaseService {

    readonly endPoint = 'https://imdb-top-100-movies.p.rapidapi.com'

    httpGet(url: string, config?: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>> {
        const defaultConfig: AxiosRequestConfig<any> = {
            ...config,
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        }
        return axios.get(this.endPoint + url, defaultConfig)
    }
}