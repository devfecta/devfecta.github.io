import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'resume', component: ResumeComponent, data: { title: 'Resume' } }
    //, { path: 'hero/:id',      component: HeroDetailComponent },
    /*
    , {
        path: '',
        component: HomeComponent,
        data: { title: 'DevFacta' }
    }
    */
    , {
        path: '',
        component: HomeComponent
    }
    /*
    , { path: '/',
        redirectTo: '/home',
        pathMatch: 'full'
    }
    */
  //, { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ResumeComponent,
        HomeComponent
    ]
    , imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { useHash: true, enableTracing: false } // <-- debugging purposes only
        )
    ]
    , providers: []
    , bootstrap: [AppComponent]
    , exports: [RouterModule]
})
export class AppModule { }
