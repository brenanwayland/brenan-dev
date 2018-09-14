import { NgModule } from '@angular/core';

//router
import { RouterModule, Routes } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent} from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { GamesComponent } from './games/games.component';
import { MusicComponent } from './music/music.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'

    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'games',
        component: GamesComponent
    },
    {
        path: 'music',
        component: MusicComponent
    },
    {
        path: 'other',
        component: OtherComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
