import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByTitle } from './photo-list/filter-by-title.pipe';

@NgModule({
    declarations: [ 
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotosComponent,
        FilterByTitle
    ],
    imports: [ 
        HttpClientModule, 
        CommonModule 
    ]
})
export class PhotosModule {}