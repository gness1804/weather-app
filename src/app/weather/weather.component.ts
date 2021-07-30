import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) {}

  getWeather(city: string): void {
    try {
      this.weatherService.getWeather(city).subscribe((w) => (this.weather = w));
    } catch (error) {
      console.error(`Problem getting weather: ${error}`);
    }
  }

  ngOnInit(): void {}
}
