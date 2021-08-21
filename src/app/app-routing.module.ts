import { SeeCountryComponent } from './country/pages/see-country/see-country.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ByCountryComponent, pathMatch: 'full' },
  { path: 'region', component: ByRegionComponent },
  { path: 'capital', component: ByCapitalComponent },
  { path: 'pais/:id', component: SeeCountryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
