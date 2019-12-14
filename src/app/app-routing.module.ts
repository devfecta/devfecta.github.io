import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
  , { path: '', component: HomeComponent }
  /*
  , { path: '/',
      redirectTo: '/home',
      pathMatch: 'full'
  }
  */
//, { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , RouterModule.forRoot(
            appRoutes,
            { useHash: false, enableTracing: false } // <-- debugging purposes only
        )
  ]
  , exports: [RouterModule]
})
export class AppRoutingModule { }
