import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'alurapic';

  photos: any[] = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService
    .listFromAlbum(1)
    .subscribe(photos => this.photos = photos);
  }

}
