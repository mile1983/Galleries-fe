import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { MyGalleriesComponent } from './components/my-galleries/my-galleries.component';
import { CreateGaleryComponent } from './create-galery/create-galery.component';
 import { AllGalleriesComponent } from './all-galleries/all-galleries.component';

const appRoutes: Routes = [
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
  }
  // {
  //   path: 'my-galleries',
  //   component: MyGalleriesComponent
  // },
  // {
  //   path: 'create',
  //   component: CreateGalleryComponent
  // }
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