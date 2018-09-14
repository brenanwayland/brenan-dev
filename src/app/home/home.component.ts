import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    featuredPages = [
        {
            title: "Games",
            link: "/games",
            content: "Dev logs, assets, tutorials, and more.",
            buttonText: "Let's play",
            image: "../assets/green.png"
        },
        {
            title: "Portfolio",
            link: "/portfolio",
            content: "A curated collection of my programming work.",
            buttonText: "Check it out",
            image: "../assets/blue.png"
        },
        {
            title: "Music",
            link: "/music",
            content: "Stream my music or browse music for sale.",
            buttonText: "Let's hear it",
            image: "../assets/orange.png"
        }
    ]

    constructor() { }

    ngOnInit() {
    }

}
