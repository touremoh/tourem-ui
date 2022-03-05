import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MatToolbarModule} from "@angular/material/toolbar";
import { HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './pages/menu/menu.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomePageComponent } from './pages/content/home-page/home-page.component';
import { ItemDetailsComponent } from './pages/content/item-details/item-details.component';
import { PageNotFoundComponent } from './pages/content/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/content/about/about.component';
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule} from "@angular/material/list";
import { MainContentComponent } from './pages/content/main-content/main-content.component';
import { ItemsComponent } from './pages/content/items/items.component';
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HomePageComponent,
    ItemDetailsComponent,
    PageNotFoundComponent,
    AboutComponent,
    MainContentComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
