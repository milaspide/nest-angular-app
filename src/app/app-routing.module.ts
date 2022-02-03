import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmministrazioneProgettiComponent } from './pages/amministrazione-progetti/amministrazione-progetti.component';
import { FeaturesComponent } from './pages/features/features.component';
import { GestioneCarichiComponent } from './pages/gestione-carichi/gestione-carichi.component';
import { GestioneRisorseComponent } from './pages/gestione-risorse/gestione-risorse.component';
import { GestioneUtenzeComponent } from './pages/gestione-utenze/gestione-utenze.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  {
    path: 'home',
    data: { breadcrumb: 'home' },
    component: HomeComponent,
  },
  {
    path: 'features',
    data: { breadcrumb: 'features' },
    component: FeaturesComponent,
  },
  {
    path: 'gestione-utenze',
    data: { breadcrumb: 'features' },
    component: GestioneUtenzeComponent,
  },
  {
    path: 'gestione-risorse',
    data: { breadcrumb: 'features' },
    component: GestioneRisorseComponent,
  },
  {
    path: 'amministrazione-progetti',
    data: { breadcrumb: 'features' },
    component: AmministrazioneProgettiComponent,
  },
  {
    path: 'gestione-carichi',
    data: { breadcrumb: 'features' },
    component: GestioneCarichiComponent,
  },
  {
    path: 'report',
    data: { breadcrumb: 'features' },
    component: ReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
