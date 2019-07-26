import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  API_KEY = '&apiKey=40f233687a574369b42c8cd177ab60e0';
  category = '';
  API_TOP_URL = `https://newsapi.org/v2/top-headlines?country=ng${this.API_KEY}`;
  urlPre = `https://newsapi.org/v2/top-headlines?country=ng&category=`;


  constructor(private httpClient: HttpClient) { }

  getHeadlines() {
    return this.httpClient.get(this.API_TOP_URL);
  }

  getPage(category) {
    this.category = category;
    return this.httpClient.get(`${this.urlPre}${this.category}${this.API_KEY}`);
  }


} // class
