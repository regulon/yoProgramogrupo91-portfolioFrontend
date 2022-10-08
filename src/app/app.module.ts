import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
