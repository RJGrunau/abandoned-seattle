import GalleryPicture from '../gallery-picture/galleryPictureComponent';
import styles from './galleryComponent.module.scss'

const GalleryComponent = ({gallery}) => {
    const photos = gallery.gallery
    console.log(photos);
    return ( 
        <div className={styles.galleryWrapper}>
            <section className={styles.galleryContainer}>
                {
                    photos.map(pic => {
                        <GalleryPicture img={pic} />
                    })
                }
            </section>
        </div>
     );
}
 
export default GalleryComponent;