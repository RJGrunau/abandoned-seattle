import styles from './galleryComponent.module.scss'
import GalleryPicture from '../gallery-picture/galleryPictureComponent'

const GalleryComponent = ({gallery}) => {
    
    return ( 
        <div className={styles.galleryWrapper}>
            <section className={styles.galleryContainer}>
                {
                    gallery.map((pic, i) => {
                        <GalleryPicture img={pic}/>
                    })
                }
            </section>
        </div>
     );
}
 
export default GalleryComponent;