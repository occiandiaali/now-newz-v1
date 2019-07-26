import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class homePage {
  articles$;

  constructor(private apiService: ApiService) {}

  ionViewDidEnter() {
    this.apiService.getHeadlines().subscribe((data) => {
      this.articles$ = data['articles'];
    });
  }

} // class
