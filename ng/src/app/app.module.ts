import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SchooleportfoliosComponent } from './schooleportfolios/schooleportfolios.component';
import { RobinhoodComponent } from './robinhood/robinhood.component';
import { CreatesessionComponent } from './createsession/createsession.component';
import { HomeComponent } from './home/home.component';
import { LiveVideoSessionComponent } from './createsession/live-video-session/live-video-session.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMeComponent,
    PersonalProjectsComponent,
    ResumeComponent,
    SchooleportfoliosComponent,
    RobinhoodComponent,
    CreatesessionComponent,
    HomeComponent,
    LiveVideoSessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
