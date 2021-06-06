import { Component, OnInit } from '@angular/core';
import { City } from '../../types/index';
import { CityService } from '../../services/city.service';


@Component({
  selector: 'search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent implements OnInit {

  query: string = ""
  cities: City[] = []
  

  constructor( private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
  }

  getWeather(): void {
    event?.preventDefault()
    alert(this.query)
  }

}
