import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSummaryData() {
    return this.http.get(`${this.apiUrl}/summary`);
  }

  getCountryDataByDate(country: string, date: string) {
    return this.http.get(`${this.apiUrl}/total/country/${country}/status/confirmed?${date}`);
  }

}
