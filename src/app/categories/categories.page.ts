import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss']
})
export class categoriesPage {
  category;

  constructor(public router: Router) {}

  go(event: string) {
    this.category = event;
    this.router.navigateByUrl(`category-page/${this.category}`);
  }


} // class
