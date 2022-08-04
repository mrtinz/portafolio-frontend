import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InfoComponent } from './componentes/info/info.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    AcercaDeComponent,
    AptitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
