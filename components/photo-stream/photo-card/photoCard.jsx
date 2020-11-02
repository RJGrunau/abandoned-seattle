import { Image } from 'react-datocms';
import styles from './photoCard.module.scss'

const PhotoCard = ({img}) => {

    return ( 
        <div className={styles.card} >
            <div className={styles.imageHolder}>
                <Image data={img.responsiveImage} />
            </div>
            <div className={styles.caption}>
               <p>{img.responsiveImage.title}</p> 
            </div>
        </div>
     );
}
 
export default PhotoCard;