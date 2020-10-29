import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByTitle' })
export class FilterByTitle implements PipeTransform {

    transform(photos: Photo[], titleQuery: string) {
        
        titleQuery = titleQuery.trim().toLowerCase();

        if(titleQuery) {
            return photos.filter(photo =>
                                 photo.title.toLowerCase().includes(titleQuery));
        }else {
            return photos;
        }
    }

}