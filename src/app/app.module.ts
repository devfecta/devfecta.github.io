import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        ResumeComponent,
        HomeComponent
    ]
    , imports: [
        BrowserModule
        , AppRoutingModule
    ]
    , providers: []
    , bootstrap: [AppComponent]
    
})
export class AppModule { }
