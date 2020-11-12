import styles from './galleryPicture.module.scss'
import { Image } from 'react-datocms';

const GalleryPicture = ({img}) => {
    return ( 
        <div className={styles.picture}>
            <Image className={styles.img} data={img.responsiveImage} />
            <div className={styles.text}>
                <h3>{img.responsiveImage.title}</h3>
            </div>
        </div>
     );
}
 
export default GalleryPicture;