import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MeuTitleComponent } from './components/meu-title/meu-title.component';
import { MeuBigCardComponent } from './components/meu-big-card/meu-big-card.component';
import { MeuSmallCardComponent } from './components/meu-small-card/meu-small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MeuTitleComponent,
    MeuBigCardComponent,
    MeuSmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
