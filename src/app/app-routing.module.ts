import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'url-shortener', component: UrlShortenerComponent },
  { path: 'verification-code', component: VerificationCodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
