import {Injectable} from '@angular/core';
import {Gif} from "../core/interfaces/gifs.interfaces";
import {GifsRequestService} from "./gifs-request.service";


@Injectable({providedIn: 'root'})
export class GifsService {
  gifs: Gif[] = [];
  private _tagsHistory: string[] = [];

  constructor(private gifsRequestService: GifsRequestService) {
    const lStorageData =  localStorage.getItem('tags_history');
    if (lStorageData) this._tagsHistory = JSON.parse(lStorageData) || [];
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag( tag: string ) {
    if (!tag || tag.length === 0) return;
    this.organizeHistory(tag);
    void this.searchGifs(tag);
  }

  private organizeHistory(tag: string)  {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    localStorage.setItem('tags_history', JSON.stringify(this._tagsHistory));
  }

  private async searchGifs( terms: string ) {
    this.gifs = (await this.gifsRequestService.searchGifs(terms)).data;
  }

}
