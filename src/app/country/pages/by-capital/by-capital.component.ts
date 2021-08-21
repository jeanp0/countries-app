import { CountryService } from './../../services/country.service';
import { Country } from './../../interfaces/country.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [],
})
export class ByCapitalComponent {
  query: string = '';
  hasError: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(query: string): void {
    this.hasError = false;
    this.query = query;

    // para que un observable se dispare debe tener al menos un subscribe
    this.countryService.searchByCapital(query).subscribe(
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
}
