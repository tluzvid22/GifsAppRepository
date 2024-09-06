import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {SearchResponse} from "../core/interfaces/gifs.interfaces";
import {firstValueFrom} from "rxjs";
//import * as gif_mockup from '../mockup/trending-gifs-request.json'

const GIPHY_API_KEY = 'Ubf1pl4EYgKJMtNDZ1TZ934Td290eu3i';
const GIPHY_BASE_URL = 'https://api.giphy.com/v1';

@Injectable({
  providedIn: 'root'
})
export class GifsRequestService {
  constructor(private httpClient: HttpClient) { }

  searchGifs( searchTerms: string ) : Promise<SearchResponse> {
    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('q', searchTerms)
      .set('limit', 12);

    return firstValueFrom(this.httpClient.get<SearchResponse>(`${GIPHY_BASE_URL}/gifs/search`, {params}));
    //return gif_mockup.data.filter(gif => gif.title.toLowerCase().includes(searchTerms.toLowerCase()));
  }

}
