import React from 'react'
import styles from './galleryComponent.module.scss'
import GalleryPicture from '../gallery-picture/galleryPictureComponent'

const GalleryComponent = ({title,assets}) => {
    const images = assets
    

    return ( 
        <div className={styles.galleryWrapper}>
                
            <section className={styles.galleryContainer}>  
                {images.map((img,i) => (
                    <GalleryPicture key={i} img={img} />
                ))}
            
            </section>
        </div>
     );
}
 
export default GalleryComponent;