import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }
  getChannels(ChannelName:string){
    const API_KEY = environment.youtubeapi
    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=relevance&q="+ChannelName+"&key="+API_KEY+""
  return this.http.get<any>(url)
}
}
