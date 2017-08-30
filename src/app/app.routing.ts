import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomePageComponent }   from './home-page/home-page.component';
import { AboutComponent }   from './about/about.component';
import { MerchComponent }   from './merch/merch.component';
import { TourComponent }   from './tour/tour.component';
import { ContactComponent }   from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'merch',
    component: MerchComponent
  },
  {
    path: 'tour',
    component: TourComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
