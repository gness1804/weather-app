import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Weather } from './weather';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<Weather> {
    const params = new HttpParams()
      .set('units', 'metric')
      .set('q', city)
      .set('appid', environment.apiKey);
    return this.http.get<Weather>(`${environment.apiUrl}/weather`, { params });
  }
}
