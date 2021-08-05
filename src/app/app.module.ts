import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StandardBackgroundDirective } from './standard-background.directive';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule, BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CounterComponent,
    FooterComponent,
    HeroComponent,
    StandardBackgroundDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
