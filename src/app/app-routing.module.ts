import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { FooterComponent } from './footer/footer.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', component: HeaderComponent, data: { title: 'Portfolio - Home' } },
  { path: '', component: EducationComponent, data: { title: 'Portfolio - Home' } },
  { path: '', component: ExpertiseComponent, data: { title: 'Portfolio - Home' } },
  { path: '', component: ExperienceComponent, data: { title: 'Portfolio - Home' } },
  { path: '', component: IntroComponent, data: { title: 'Portfolio - Home' } },
  { path: '', component: SkillsComponent, data: { title: 'Portfolio - Home' } },
  { path: '', component: GitHubComponent, data: { title: 'Portfolio - Home' } },
  { path: '', component: FooterComponent, data: { title: 'Portfolio - Home' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
0
