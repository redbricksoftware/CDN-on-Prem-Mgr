import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';

import { HttpModule }    from '@angular/http';

import { HeroDetailComponent } from "./heroes/hero-detail.component";

import { CDNFileDetailComponent } from './CDN/cdn-file-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        CDNFileDetailComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }