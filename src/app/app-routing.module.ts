import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/content/home-page/home-page.component";
import {PageNotFoundComponent} from "./pages/content/page-not-found/page-not-found.component";
import {ItemDetailsComponent} from "./pages/content/item-details/item-details.component";
import {ItemsComponent} from "./pages/content/items/items.component";
import {AboutComponent} from "./pages/content/about/about.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'articles', component: ItemsComponent },
  { path: 'articles/:id', component: ItemDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
