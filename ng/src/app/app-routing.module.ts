import { LiveVideoSessionComponent } from './createsession/live-video-session/live-video-session.component';
import { HomeComponent } from './home/home.component';
import { CreatesessionComponent } from './createsession/createsession.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { SchooleportfoliosComponent } from './schooleportfolios/schooleportfolios.component';
import { RobinhoodComponent } from './robinhood/robinhood.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "aboutMe", component: AboutMeComponent},
  {path: "personalProjects", component: PersonalProjectsComponent},
  {path: "resume", component: ResumeComponent},
  {path: "schoolEPortfolios", component: SchooleportfoliosComponent},
  {path: "robinhood", component: RobinhoodComponent},
  {path: "createSession", component: CreatesessionComponent},
  {path: "createSession/liveVideoSession", component: LiveVideoSessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
