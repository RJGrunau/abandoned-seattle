import styles from './galleryComponent.module.scss'
import GalleryPicture from '../gallery-picture/galleryPictureComponent'
import {Image} from 'react-datocms'

const GalleryComponent = ({title,assets}) => {
    console.log(assets);
    return ( 
        <div className={styles.galleryWrapper}>
                <h1>{title}</h1>
            <section className={styles.galleryContainer}>
                {
                    assets.map(img => (
                        <GalleryPicture img={img} />
                    ))
                }
            </section>
        </div>
     );
}
 
export default GalleryComponent;