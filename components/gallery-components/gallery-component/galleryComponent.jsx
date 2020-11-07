import styles from './galleryComponent.module.scss'
import GalleryPicture from '../gallery-picture/galleryPictureComponent'
import {Image} from 'react-datocms'

const GalleryComponent = ({gallery}) => {
    
    return ( 
        <div className={styles.galleryWrapper}>
            <section className={styles.galleryContainer}>
                hi
                
            </section>
        </div>
     );
}
 
export default GalleryComponent;