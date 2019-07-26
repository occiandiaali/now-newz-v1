import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

import { ActivatedRoute } from '@angular/router';

// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.page.html',
  styleUrls: ['./category-page.page.scss'],
})
export class CategoryPage implements OnInit {

  articles;
  webUrl;
  pageCategory;

  constructor(private apiService: ApiService, public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pageCategory = this.activeRoute.snapshot.paramMap.get('name');
  }

  ionViewDidEnter() {
    this.apiService.getPage(this.pageCategory).subscribe((data) => {
        this.articles = data['articles'];
      });
   }


  //  openWebPage(uri) {
  //    this.webUrl = uri;
  //    const browser = new InAppBrowser();
  //    // this.iab.create(`${this.webUrl}`, `_blank`);
  //  }


} // class
