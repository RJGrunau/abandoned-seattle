import styles from './galleryComponent.module.scss'
import GalleryPicture from '../gallery-picture/galleryPictureComponent'

const GalleryComponent = ({title,assets}) => {
    const images = assets
    return ( 
        <div className={styles.galleryWrapper}>
                
            <section className={styles.galleryContainer}>  
                <GalleryPicture img={images[0]} />
            <div className={styles.galleryNav}>
                <div>back</div> <div>next</div>
            </div>
            </section>
        </div>
     );
}
 
export default GalleryComponent;