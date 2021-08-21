import { Country } from './../../interfaces/country.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];

  constructor() {}
}
