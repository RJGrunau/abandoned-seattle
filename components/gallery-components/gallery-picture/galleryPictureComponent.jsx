import styles from './galleryPicture.module.scss'
import {Image} from 'react-datocms'

const GalleryPicture = ({img}) => {
    console.log(img);
    return ( 
        <div className={styles.picture}>
            <Image data={img.responsiveImage} />
        </div>
     );
}
 
export default GalleryPicture;