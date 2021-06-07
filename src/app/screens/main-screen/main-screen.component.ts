import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  // actual time
  currentTime: Date = new Date();
  // default ID for city - Košice
  cityName!: string;
  // data from open weather API
  currentData: any
  forecastData: any

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    (this.cityService.getCityName() != undefined) ? this.cityName = this.cityService.getCityName() : this.cityName = "Košice"
    this.getCityData()
  }
  
  // get data from open weather API
  private getCityData() {
    //console.log(this.cityName)
    this.cityService.getCurrentData(this.cityName).subscribe(
      // next()
      (data: any) => {
        this.currentData = data
        //console.log(data)
      },
      // error()
      (error: any) => {
        console.error(error)
      },
      // complete()
      () => {
        this.currentData.sys.sunrise = new Date(this.currentData.sys.sunrise*1000);
        this.currentData.sys.sunset = new Date(this.currentData.sys.sunset*1000);
        this.currentData.dt = new Date(this.currentData.dt*1000);
        this.getForecast()
      }
    )
  }

  // get data from open weather API
  private getForecast() {
    //console.log(this.cityName)
    this.cityService.getForecastData(this.currentData.coord.lat,this.currentData.coord.lon).subscribe(
      // next()
      (data: any) => {
        this.forecastData = data.daily
      },
      // error()
      (error: any) => {
        console.error(error)
      },
      // complete
      () => {
        for (let i = 0; i < this.forecastData.length; i++) {
          const date = new Date(this.forecastData[i].dt*1000);
          this.forecastData[i].dt = date
        }
      }
    )
  }

}
