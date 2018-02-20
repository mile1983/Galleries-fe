// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { GalleryService } from './services/gallery.service';
// import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http/src/client';

// @NgModule({
//   imports: [
//     CommonModule,
//     HttpModule,
//     HttpClientModule
//   ],
//   providers: [
//     GalleryService
//   ],
//   declarations: []
// })
// export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from "./services/auth.service";

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule
    ],
    providers: [
        AuthService
    ],
    declarations: [
    ],
    exports: [
    ]  
})

export class SharedModule { }