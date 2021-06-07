import { Component, OnInit } from '@angular/core';
import { City } from '../../types/index';
import { CityService } from '../../services/city.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent implements OnInit {

  query: string = ""
  cities: City[] = []
  
  constructor( private cityService: CityService, private router: Router) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
    // get actual temperatures
    for (let i = 0; i < this.cities.length; i++) {
      this.cityService.getCurrentData(this.cities[i].name).subscribe(
        // next()
        (data: any) => {
          this.cities[i].actualTemp = data.main.temp
        },
        // error()
        (error: any) => {
          console.error(error)
        }
      )
    }
  }

}
