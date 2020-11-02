import { Image } from 'react-datocms';
import styles from './photoCard.module.scss'

const PhotoCard = ({img}) => {

    return ( 
        <div className={styles.PhotoCard} >
            
            <div className={styles.imageHolder}>
                <Image data={img.responsiveImage} />
            </div>
            
        </div>
     );
}
 
export default PhotoCard;