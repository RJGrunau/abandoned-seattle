import React from 'react'
import styles from './galleryComponent.module.scss'
import GalleryPicture from '../gallery-picture/galleryPictureComponent'

const GalleryComponent = ({title,assets}) => {
    const images = assets
    const [fImage, setFImage] = React.useState(0)
    const incrementImage = () =>{
        let numberOfPhotos = images.lenghth
        const stopper = 1
        numberOfPhotos = numberOfPhotos - stopper
        let slideIndex = fImage
        slideIndex ++ 
        setFImage(slideIndex)
    }
    return ( 
        <div className={styles.galleryWrapper}>
                
            <section className={styles.galleryContainer}>  
                <GalleryPicture img={images[fImage]} />
            <div className={styles.galleryNav}>
                <div>back</div> <div onClick={incrementImage}>next</div>
            </div>
            </section>
        </div>
     );
}
 
export default GalleryComponent;