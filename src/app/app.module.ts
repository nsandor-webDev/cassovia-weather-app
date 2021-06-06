import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Screen components
import { MainScreenComponent } from './screens/main-screen/main-screen.component';
import { SearchScreenComponent } from './screens/search-screen/search-screen.component';
// Components

import { TheBackgroundComponent } from './components/the-background/the-background.component';

@NgModule({
  declarations: [
    AppComponent,
    TheBackgroundComponent,
    MainScreenComponent,
    SearchScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
