import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { CreateJobComponent } from './components/recruiter/create-job/create-job.component';
import { CandidateLayoutComponent } from './components/candidate/candidate-layout/candidate-layout.component';

const routes: Routes = [
  { path: 'f', component: LandingPageComponent},
  { path: 'login', component: LoginComponent},

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path:'', component: HomeComponent },
      { path:'createJob', component: CreateJobComponent},

      // Add more child routes as needed
    ]
  },
  {
    path: 'candidateLayout',
    component: CandidateLayoutComponent,
    children: [
      { path:'', component: HomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
