import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { GestioneUtenzeComponent } from './pages/gestione-utenze/gestione-utenze.component';
import { GestioneRisorseComponent } from './pages/gestione-risorse/gestione-risorse.component';
import { AmministrazioneProgettiComponent } from './pages/amministrazione-progetti/amministrazione-progetti.component';
import { GestioneCarichiComponent } from './pages/gestione-carichi/gestione-carichi.component';
import { ReportComponent } from './pages/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    GestioneUtenzeComponent,
    GestioneRisorseComponent,
    AmministrazioneProgettiComponent,
    GestioneCarichiComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
