import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly baseUri: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.baseUri}/name/${query}`;
    return this.http.get<Country[]>(url);
  }

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.baseUri}/capital/${query}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByAlpha(id: string): Observable<Country> {
    const url = `${this.baseUri}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
