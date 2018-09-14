import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Brenan Wayland: Developer';

  navTabs = [
      {
          title: "Home",
          link: "/"
      },
      {
          title: "About",
          link: "/about"
      },
      {
          title: 'Experience',
          link: '/experience'
      },
      {
          title: 'Portfolio',
          link: '/portfolio'
      },
      {
          title: 'Blog',
          link: '/blog'
      },
      {
          title: 'Games',
          link: '/games'
      },
      {
          title: 'Music',
          link: '/music'
      },
      {
          title: 'Other Stuff',
          link: '/other'
      }
  ]
}
