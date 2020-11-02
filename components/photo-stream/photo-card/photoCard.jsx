import { Image } from 'react-datocms';
import styles from './photoCard.module.scss'

const PhotoCard = ({img}) => {
    console.log(img);
    return ( 
        <div >
            <h1>Hello</h1>
            {/* <div className={styles.imageHolder}>
                <Image data={img} alt={alt}/>
            </div>
            {/* <div className={styles.caption}>
                <p>{caption}</p>
            </div> */} 
        </div>
     );
}
 
export default PhotoCard;