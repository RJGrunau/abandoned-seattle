import { Image } from 'react-datocms';
import styles from './photoCard.module.scss'

const PhotoCard = ({img, alt, caption}) => {
    return ( 
        <div className={styles.card}>
            <div className={styles.imageHolder}>
                <Image data={img.responsiveImage} alt={alt}/>
            </div>
            <div className={styles.caption}>
                <p>{caption}</p>
            </div>
        </div>
     );
}
 
export default PhotoCard;