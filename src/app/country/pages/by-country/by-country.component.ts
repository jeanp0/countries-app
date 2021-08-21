import { Country } from './../../interfaces/country.interface';
import { CountryService } from './../../services/country.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent {
  query: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(query: string): void {
    this.hasError = false;
    this.query = query;

    // para que un observable se dispare debe tener al menos un subscribe
    this.countryService.searchCountry(query).subscribe(
      (countries: Country[]) => {
        this.countries = countries;
      },
      (err) => {
        console.info(err);
        this.hasError = true;
        this.countries = [];
      }
    );
  }

  suggestions(query: string) {
    this.hasError = false;
    // TODO: crear sugerencias
  }
}
