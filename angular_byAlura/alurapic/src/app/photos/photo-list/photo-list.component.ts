import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  constructor(private photoService: PhotoService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const albumId = this.activateRoute.snapshot.params.albumId;
    this.photoService
    .listFromAlbum(albumId)
    .subscribe(photos => this.photos = photos);
  }

}
