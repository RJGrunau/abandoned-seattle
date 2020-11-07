import styles from './galleryPicture.module.scss'
import {Image} from 'react-datocms'

const GalleryPicture = ({img}) => {
    return ( 
        <div className={styles.picture}>
            <Image data={img.responsiveImage} />
        </div>
     );
}
 
export default GalleryPicture;