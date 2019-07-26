import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'category-page', loadChildren: './category-page/category-page.module#CategoryPageModule' },
  { path: 'categories', loadChildren: './categories/categories.module#categoriesPageModule' },
  { path: 'category-page/:name', loadChildren: './category-page/category-page.module#CategoryPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
