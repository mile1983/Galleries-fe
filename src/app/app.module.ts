import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllGalleriesComponent } from './components/all-galleries/all-galleries.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CreateNewGalleryComponent } from './components/create-new-gallery/create-new-gallery.component';
import { MyGalleryComponent } from './components/my-gallery/my-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    AllGalleriesComponent,
    CreateNewGalleryComponent,
    MyGalleryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
