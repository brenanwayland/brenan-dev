import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Angular Material
//material animations
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

//routing
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { BlogComponent } from './blog/blog.component';
import { GamesComponent } from './games/games.component';
import { MusicComponent } from './music/music.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    BlogComponent,
    GamesComponent,
    MusicComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
