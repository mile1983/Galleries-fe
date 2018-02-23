import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyGalleryComponent } from './components/my-gallery/my-gallery.component';
import { CreateNewGalleryComponent } from './components/create-new-gallery/create-new-gallery.component';
import { AllGalleriesComponent } from './components/all-galleries/all-galleries.component';
//import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  
  
  {
    path: '',
    component: AllGalleriesComponent
  },

//  {
//     path: '/home',
//     component: HomePageComponent
//   }, 
  {
    path: 'all-galleries',
    component: AllGalleriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'my-galleries',
    component: MyGalleryComponent
  },
  {
    path: 'create',
    component: CreateNewGalleryComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }