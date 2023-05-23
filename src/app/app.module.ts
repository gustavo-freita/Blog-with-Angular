import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MeuTitleComponent } from './components/meu-title/meu-title.component';
import { MeuEmailComponent } from './components/meu-email/meu-email.component';
import { MeuFotoComponent } from './components/meu-foto/meu-foto.component';
import { MeuTitleInfo01Component } from './components/meu-title-info01/meu-title-info01.component';
import { MeuTitleInfo02Component } from './components/meu-title-info02/meu-title-info02.component';
import { MeuCardInfo01Component } from './components/meu-card-info01/meu-card-info01.component';
import { MeuCardInfo02Component } from './components/meu-card-info02/meu-card-info02.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MeuTitleComponent,
    MeuEmailComponent,
    MeuFotoComponent,
    MeuTitleInfo01Component,
    MeuTitleInfo02Component,
    MeuCardInfo01Component,
    MeuCardInfo02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
