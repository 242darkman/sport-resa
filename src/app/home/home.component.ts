import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sportsNews = [
    {
      image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb',
      title: 'News 1',
      description: 'This is sports news 1',
    },
  ];
}
