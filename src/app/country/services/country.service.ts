import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly baseUri: string = 'https://restcountries.eu/rest/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  searchByName(query: string): Observable<Country[]> {
    const url = `${this.baseUri}/name/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByCapital(query: string): Observable<Country[]> {
    const url = `${this.baseUri}/capital/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  searchByRegion(query: string): Observable<Country[]> {
    const url = `${this.baseUri}/region/${query}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(id: string): Observable<Country> {
    const url = `${this.baseUri}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
