import PhotoDesc from './photoDescription';
import Photos from './photos';

export default function PhotoGallery(){
    return(
        <section className="flex justify-between items-center py-10 w-13/13 border w-128">
            <PhotoDesc />
            <Photos />
        </section>
    )
}