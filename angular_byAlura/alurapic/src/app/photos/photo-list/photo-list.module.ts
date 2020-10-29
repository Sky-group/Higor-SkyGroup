import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PhotoModule } from '../photo/photo.module';
import { FilterByTitle } from './filter-by-title.pipe';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        FilterByTitle
    ],
    imports: [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoListModule {}