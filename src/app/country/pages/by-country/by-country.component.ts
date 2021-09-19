import { Component } from '@angular/core';
import { Country } from './../../interfaces/country.interface';
import { CountryService } from './../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class ByCountryComponent {
  query: string = '';
  hasError: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(private countryService: CountryService) {}

  search(query: string): void {
    this.showSuggestions = false;
    this.hasError = false;
    this.query = query;

    // para que un observable se dispare debe tener al menos un subscribe
    this.countryService.searchByName(query).subscribe(
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
    this.query = query;
    this.showSuggestions = true;
    this.countryService.searchByName(query).subscribe(
      (countries: Country[]) =>
        (this.suggestedCountries = countries.splice(0, 5)),
      (err: any) => (this.suggestedCountries = [])
    );
  }

  searchSuggested(query: string) {
    this.search(query);
  }
}
