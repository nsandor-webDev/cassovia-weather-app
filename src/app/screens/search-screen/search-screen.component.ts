import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent implements OnInit {

  query: string = ""
  cities = [
    { name: 'Bratislava', actualTemp: 35},
    { name: 'Humenné', actualTemp: 18},
    { name: 'Koromľa', actualTemp: 28},
    { name: 'Košice', actualTemp: 28},
    { name: 'Michalovce', actualTemp: 16},
    { name: 'Sobrance', actualTemp: 16}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getWeather(): void {
    event?.preventDefault()
    alert(this.query)
  }

}
