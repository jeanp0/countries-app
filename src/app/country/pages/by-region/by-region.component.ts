import { CountryService } from './../../services/country.service';
import { Country } from './../../interfaces/country.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  getButtonStyleClass(region: string): string {
    return this.activeRegion === region ? 'btn-primary' : 'btn-outline-primary';
  }

  activateRegion(region: string) {
    if (region === this.activeRegion) return;

    this.activeRegion = region;
    this.countries = [];
    this.countryService.searchByRegion(region)
      .subscribe(
        (countries: Country[]) => this.countries = countries,
        (err: any) => console.info(err),
      );
  }
}
