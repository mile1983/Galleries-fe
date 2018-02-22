import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../shared/services/gallery.service';
import {Gallery} from '../../shared/models/gallery.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-all-galleries',
  templateUrl: './all-galleries.component.html',
  styleUrls: ['./all-galleries.component.css']
})
export class AllGalleriesComponent implements OnInit {
  
  public galleries;

  constructor(public galleryService: GalleryService) { }
  
    public ngOnInit() {
      this.galleryService.getGalleries().subscribe(data => {
          this.galleries = data;
      }, (err: HttpErrorResponse) => {
          alert(`Backend returned code ${err.status} with message: ${err.error}`);
  });

}
}
